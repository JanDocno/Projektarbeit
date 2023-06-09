# Analyse der Leistungsfähigkeit der identifizierten KI-Modelle, insbesondere hinsichtlich der Bildsegmentierung und Objekterkennung

## Analyse der Leistungsfähigkeit der identifizierten KI-Modelle

### Stable Diffusion XL 

Das KI-Modell Stable Diffusion XL von Stability AI verwendet die Latente Stabile Diffusion [^2].  Das Latente Stabile Diffusion Modell ist ein probabilistisches Modell, das schrittweise Rauschen aus Bildern entfernt, um realistische Ergebnisse zu erzielen. Es verwendet Denoising Autoencoder (DAE) , um das Rauschen zu reduzieren und wichtige Merkmale des Bildes zu erfassen. Dadurch werden Bilder generiert, die dem Originalbild ähneln und keine störenden Rauschelemente enthalten [^3].

![Bild](https://github.com/CompVis/latent-diffusion/raw/main/assets/modelfigure.png) [^4]

### Vergleich hinsichtlich Inpainting
„Unsere latenten Diffusionsmodelle (LDMs) erzielen neue, hochmoderne Ergebnisse für Bildinpainting und klassenbedingte Bildsynthese (...) während gleichzeitig der Rechenaufwand im Vergleich zu pixelbasierten DMs deutlich reduziert wird [^3].“

## Bildsegmentierung und Objekterkennung in 360 Grad Panoramabildern 

Die Segmentierung und Erkennung von Objekten in 360 Grad Panoramabildern stellt eine besondere Herausforderung dar, aufgrund der sphärischen oder zylindrischen Projektion. Diese Projektion führt zu Verzerrungen und Perspektivänderungen, die es herkömmlichen Deep Learning Modellen erschweren, die Bilder zu verarbeiten. 

### SphereNet

SphereNet ist ein Deep Learning Ansatz, der speziell entwickelt wurde, um die Herausforderungen bei der Bildsegmentierung und Objekterkennung in 360 Grad Panoramabildern anzugehen. SphereNet nutzt fortschrittliche Techniken wie sphärische Entzerrung, um die Genauigkeit und Robustheit der Bildsegmentierung und Objekterkennung in 360 Grad Panoramabildern zu verbessern [^1].

![Bild](https://is.mpg.de/uploads/publication/image/20264/benEccv18.png) [^1]

## Quellenverzeichnis

[^1]: https://www.cvlibs.net/publications/Coors2018ECCV.pdf
[^2]: https://stability.ai/blog/stable-diffusion-v2-release
[^3]: arxiv.org/pdf/2112.10752.pdf
[^4]: https://github.com/CompVis/latent-diffusion 
