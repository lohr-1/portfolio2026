# Design System: Archive Index - Data Structure

Este documento detalha a identidade visual extraída do projeto Stitch. A estética segue uma linha **"Technical Avant-Garde"**, priorizando estrutura, rigidez e clareza técnica.

## 🎨 Paleta de Cores (Tokens Principais)

| Categoria | Token | Cor (Hex) | Amostra |
| :--- | :--- | :--- | :--- |
| **Principal** | `primary` | `#000000` | Black |
|  | `on_primary` | `#e2e2e2` | Light Gray |
| **Fundo** | `background` | `#f9f9f9` | Off-white |
|  | `on_background` | `#1a1c1c` | Dark Charcoal |
| **Secundária**| `secondary` | `#5e5e5e` | Medium Gray |
|  | `on_secondary` | `#ffffff` | White |
| **Terciária** | `tertiary` | `#3b3b3b` | Dark Gray |
|  | `on_tertiary` | `#e2e2e2` | Light Gray |
| **Interface** | `surface` | `#f9f9f9` | Surface Gray |
|  | `outline` | `#777777` | Border Gray |
| **Estado** | `error` | `#ba1a1a` | Alert Red |

## Typography: The Brutalist Voice

O sistema utiliza duas fontes principais para criar contraste entre o "Técnico" e o "Funcional".

- **Headlines & Display:** `Space Grotesk`
  - *Voz:* Técnica e sofisticada.
  - *Execução:* Espaçamento entre letras (letter-spacing) reduzido para `-0.05em`.
- **Body & Titles:** `Inter`
  - *Voz:* Funcional e legível.
  - *Execução:* Utilizada para descrições técnicas e blocos de texto longos.
- **Labels:** `Space Grotesk` (All-caps)
  - *Voz:* Blueprint/Metadados.

## 🏗️ Princípios de Design (Technical Avant-Garde)

1.  **Invisible Scaffolding:** Uso de bordas finas (1px) em `outline` ou `primary` para expor a grade (grid).
2.  **Zero Arredondamento:** Todas as bordas têm `border-radius: 0px`. A estética é "afiada".
3.  **Profundidade Tonal:** Não use sombras (box-shadow). A profundidade é criada por mudanças de cores de fundo (ex: `surface-container-highest` vs `surface`).
4.  **Assimetria Intencional:** Layouts quebrados e blocos de cores pesados para criar tensão visual.

---
*Gerado automaticamente via Stitch MCP.*
