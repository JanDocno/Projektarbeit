# Identifikation geeigneter vortrainierter KI-Modelle

Die Suche nach vortrainierten KI-Modellen, die speziell für 360-Grad-Panoramabilder konzipiert sind, ist eine Herausforderung. Da die meisten Modelle mit "Standard" Bilder trainiert sind.

Eine Lösung könnte sein, ein Panoramabild in mehere gleich große Bildabschnitte zu unterteilen, diese separat zu bearbeiten und dann wieder zusammenzufügen. Aber diese Methode könnte zu sichtbaren Linien führen, falls ein Objekt in ein separiertes Bild hineinragt.

Eine andere Möglichkeit könnte sein, ein eigenes Modell zu trainieren, das speziell auf Panoramabilder ausgerichtet ist. Dazu müsste jedoch ein ausreichend großes Datenset von 360 Grad Panoramabildern vorhanden sein und die notwendigen Ressourcen für das Training des Modells zur Verfügung stehen.

## KI gestützte Plattformen
Im folgenden werden KI gestützete Plattformen vorgestellt, die es ermöglichen Bilder mittels Künstlicher Intelligenz zu bearbeiten.

### OPENAI DALL-E 2
Die KI gestützte Plattform OpenAI DALL-E 2 ist in der Lage, Bilder auf Grundlage von Textbeschreibungen zu bearbeiten. Außerdem kann eine Anwendungen über eine API erstellt werden.

Der Zugang zur API kann hier beantragt werden: 
https://platform.openai.com

| Input                     | Mask                      | Output                    |
| ------------------------- | ------------------------- | ------------------------- |
| ![Beschreibung 1](https://cdn.openai.com/API/images/guides/image_edit_original.webp) | ![Beschreibung 2](https://cdn.openai.com/API/images/guides/image_edit_mask.webp) | ![Beschreibung 3](https://cdn.openai.com/API/images/guides/image_edit_output.webp)|

### Stable Diffusion
Die KI gestützte Plattform Stable Diffusion ist in der Lage, Bilder auf Grundlage von Textbeschreibungen zu bearbeiten.

Der Zugriff auf die API von Stable Diffision ist hier erläutert: https://platform.stability.ai/docs/features/inpainting?tab=typescript

| Beispiel                | 
| ------------------------| 
| ![Beschreibung 1](https://github.com/JanDocno/Projektarbeit/assets/128127954/a50e8c40-7d5c-4c9b-a68c-63be10e43e18) |

### Magic Eraser
Die KI gestützte Plattform Magic Eraser von Magic Studio ist in der Lage, Objekte in einem Bild auf Grundlage von Makierungen zu entfernen. Außerdem kann eine Anwendungen mit Bildbearbeitungs-APIs erstellt werden, die jeden Monat mehr als 8 Millionen Bearbeitungen ermöglicht.

Der Zugang zur API kann hier beantragt werden: 
https://airtable.com/shrYI9aUKzypNYH1X

| Beispiel 1              | Beispiel 2              | 
| ------------------------| ------------------------| 
| ![Beschreibung 1](https://cdn.magicstudio.com/assets/me-real-estate.gif) |![Beschreibung 1](https://cdn.magicstudio.com/assets/magic-eraser-demo-car-and-pedestrian-crossing.gif) |

### ADOBE GENERTIVE FILL

| Beispiel 1              | Beispiel 2              | 
| ------------------------| ------------------------| 
| ![Beschreibung 1](https://helpx.adobe.com/content/dam/help/en/photoshop/using/generative-fill/remove-objects-gen-ai-ps.png.img.png) |![Beschreibung 1](https://blog.adobe.com/de/publish/2023/05/23/media_14c5b217f6b3b505766f63ce40b28a17139cb38ce.png?width=2000&format=webply&optimize=medium) |### ADOBE GENERTIVE FILL

