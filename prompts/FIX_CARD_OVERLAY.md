# Fix: Overlay Escuro nos Cards de Serviço

## Contexto

A seção "O Que Ofereço" já tem imagem de fundo nos três cards de serviço (Eventos Exclusivos, Consultoria em Gastronomia Japonesa, Curso Introdutório de Sushi). Porém, **o overlay escuro não foi implementado corretamente** — a imagem foi colocada como fundo mas sem camada de escurecimento, tornando o texto praticamente ilegível.

Esta tarefa corrige exclusivamente isso. **Não altere copy, estrutura, layout ou qualquer outra parte do site.**

---

## O Que Fazer

Localizar o componente responsável pelos cards da seção "O Que Ofereço" e aplicar a estrutura de três camadas abaixo em cada card.

### Estrutura JSX obrigatória

```jsx
<div className={styles.serviceCard}>
  {/* Camada 1: imagem de fundo */}
  <Image
    src="/images/nome-da-imagem.jpg"
    alt="Descrição da imagem em português"
    fill
    className={styles.cardBgImage}
    style={{ objectFit: 'cover' }}
  />

  {/* Camada 2: overlay escuro — NÃO REMOVER */}
  <div className={styles.cardOverlay} />

  {/* Camada 3: conteúdo — deve ficar acima do overlay */}
  <div className={styles.cardContent}>
    {/* todo o conteúdo existente do card, sem alterações */}
  </div>
</div>
```

### CSS obrigatório

```css
.serviceCard {
  position: relative;
  overflow: hidden;
  /* manter demais estilos existentes */
}

.cardBgImage {
  position: absolute;
  inset: 0;
  z-index: 0;
  object-fit: cover;
}

.cardOverlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.30) 0%,
    rgba(0, 0, 0, 0.55) 40%,
    rgba(0, 0, 0, 0.80) 100%
  );
}

.cardContent {
  position: relative;
  z-index: 2; /* deve ser maior que o z-index do overlay */
}
```

### Cores do texto dentro dos cards

- Títulos: `color: #ffffff`
- Corpo e itens de lista: `color: rgba(255, 255, 255, 0.85)`
- Subtítulo de destaque (amber/dourado): manter cor de acento atual — se o contraste estiver baixo, usar `#F5C168`
- Texto do blockquote/citação itálica: `color: rgba(255, 255, 255, 0.75)`

---

## Checklist de Validação

Antes de concluir, confirmar cada item:

- [ ] O título de cada card está completamente legível sobre a imagem?
- [ ] Os itens da lista estão legíveis?
- [ ] O botão CTA tem contraste adequado?
- [ ] O `z-index` do `.cardContent` (2) é maior que o do `.cardOverlay` (1)?
- [ ] A tag `<Image>` usa `fill` e o card pai tem `position: relative` e `overflow: hidden`?
- [ ] Todo texto visível está em português?
