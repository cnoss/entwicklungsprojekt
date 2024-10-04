---
title: User Stories
snippet: text
id: intro
inToc: false
cssClass: 
---

### User Stories

#### U1: Als Admin möchte ich Vorgaben für die Dateigröße und -auflösung festlegen, damit meine Kunden ihre Dateien vor dem Hochladen optimieren können.
##### Akzeptanzkriterien

  - Ich kann Parameter wie maximale Dateigröße, Auflösung und Komprimierungsgrad in der Admin-Oberfläche einstellen.
  - Diese Parameter werden automatisch auf die hochgeladenen Dateien angewendet, ohne dass der Kunde manuell eingreifen muss.

#### U2: Als Admin möchte ich personalisierte Links generieren können, damit meine Kunden direkt Zugriff auf das Tool haben.
##### Akzeptanzkriterien
- Ich kann einen personalisierten Link für jeden Kunden generieren.
- Dieser Link enthält die voreingestellten Optimierungsparameter und wird automatisch erstellt.
- Der Link kann nur von dem entsprechenden Kunden genutzt werden und ist für eine begrenzte Zeit gültig.

#### U3: Als Admin möchte ich ein Guthaben für jeden Kunden festlegen, damit sie nicht unbegrenzt Dateien hochladen können.
##### Akzeptanzkriterien
- Ich kann ein Upload-Limit pro Kunde festlegen (z.B. Dateigröße, Anzahl der Dateien).
- Der Kunde kann nur Dateien bis zum Erreichen dieses Limits hochladen.
- Optional: Der Kunde wird über sein verbleibendes Guthaben informiert.

#### U4: Als Kunde möchte ich über einen einfachen Link Dateien hochladen und automatisch optimieren lassen, ohne technische Details anpassen zu müssen.
##### Akzeptanzkriterien
- Ich kann den bereitgestellten Link öffnen und dort Dateien hochladen.
- Die Dateien werden automatisch basierend auf den Vorgaben des Admins optimiert.
- Der Upload und die Optimierung erfolgen nahtlos, ohne dass ich manuelle Einstellungen vornehmen muss.

#### U5: Als Kunde möchte ich nach der Optimierung meine Dateien sofort herunterladen können, damit ich sie direkt in das CMS hochladen kann.
##### Akzeptanzkriterien
- Nach dem Hochladen werden die Dateien automatisch optimiert.
- Ich kann die optimierten Dateien direkt über einen Download-Button herunterladen.
- Optional: Ich erhalte eine Benachrichtigung (z.B. per E-Mail), wenn die Dateien bereitstehen.

#### U6: Als Admin möchte ich sicherstellen, dass die Links nur für einen bestimmten Zeitraum gültig sind, um Missbrauch und «Karteileichen» zu vermeiden.
##### Akzeptanzkriterien
- Ich kann festlegen, dass die generierten Links nach einer bestimmten Zeit ablaufen (z.B. 2 Wochen).
- Nach Ablauf des Links ist kein Zugriff auf die Optimierungsfunktion mehr möglich.

#### U7: Als Admin möchte ich sehen, wie viel Guthaben ein Kunde noch hat, um den Überblick über die Nutzung zu behalten.
##### Akzeptanzkriterien
- In der Admin-Oberfläche kann ich das verbleibende Guthaben eines Kunden einsehen.
- Ich kann das Guthaben bei Bedarf manuell zurücksetzen oder anpassen.

#### U8: Als Kunde möchte ich über eine Benachrichtigung informiert werden, wenn mein Guthaben erschöpft oder mein Zeitfenster ausgelaufen ist, damit ich weiß, wann ich keine Dateien mehr hochladen kann.
##### Akzeptanzkriterien
- Ich erhalte eine Meldung, wenn ich mein Upload-Limit erreicht habe.
- Optional: Die Benachrichtigung enthält Informationen darüber, wie ich weiteres Guthaben erhalten kann.

#### U9: Als Kunde möchte ich ein einfaches und klares Interface, damit ich den Upload und die Optimierung ohne Schwierigkeiten durchführen kann.
##### Akzeptanzkriterien
- Die Benutzeroberfläche ist minimalistisch und intuitiv gestaltet, sodass ich den Uploadprozess leicht verstehe.
- Alle notwendigen Funktionen (Upload, Download, Fortschrittsanzeige) sind leicht zugänglich und gut sichtbar.

#### U10: Als Kunde möchte ich während des Uploads und der Optimierung den Fortschritt sehen, um zu wissen, wie lange der Vorgang noch dauert.
##### Akzeptanzkriterien
- Es gibt eine Fortschrittsanzeige (z.B. prozentualer Fortschritt, Ladebalken), die den Status des Datei-Uploads und der Optimierung zeigt.
- Nach Abschluss des Uploads wird eine Erfolgsmeldung angezeigt.

#### U11: Als Kunde möchte ich eine visuelle Bestätigung erhalten, dass meine Dateien erfolgreich hochgeladen und optimiert wurden.
##### Akzeptanzkriterien
- Nach dem erfolgreichen Upload und der Optimierung wird eine deutliche Bestätigung angezeigt (z.B. ein Häkchen, eine Nachricht: "Datei erfolgreich optimiert").
- Der Download-Button ist sofort sichtbar und leicht zugänglich.

#### U12: Als Admin möchte ich ein übersichliches und klar strukturiertes Dashboard, das mir ermöglicht, Vorgaben für die Optimierung und Guthaben übersichtlich zu verwalten.
##### Akzeptanzkriterien
- Das Admin-Dashboard ist klar strukturiert und ermöglicht es mir, Vorgaben wie Dateigrößen, Auflösungen und Guthaben einfach anzupassen.
- Alle relevanten Informationen (z.B. Kunden-Links, Nutzung des Guthabens) sind auf einen Blick einsehbar.

#### U13: Als Kunde möchte ich bei Problemen oder Fehlermeldungen klare und hilfreiche Hinweise bekommen, um zu verstehen, was schiefgelaufen ist.
##### Akzeptanzkriterien
  - Wenn es beim Upload oder der Optimierung zu Fehlern kommt, werden die Fehlermeldungen in einfacher und verständlicher Sprache angezeigt.
  - Die Fehlermeldung enthält, wenn möglich, Vorschläge zur Lösung des Problems (z.B. Dateiformat nicht unterstützt, Datei zu groß).

#### U14: Als Kunde möchte ich mich durch klare visuelle Hinweise (z.B. Symbole, Farben) sicher durch den Upload-Prozess leiten lassen, damit ich keine wichtigen Schritte verpasse.
##### Akzeptanzkriterien
  - Der Upload-Prozess verwendet klare visuelle Elemente wie Symbole, Farben und Buttons, um den Nutzer durch den Prozess zu führen.
  - Es gibt klare visuelle Unterschiede zwischen aktiven (z.B. Hochladen) und inaktiven (z.B. Vorgang läuft) Zuständen, sodass der Nutzer immer weiß, was als nächstes passiert.

#### U15: Als Admin möchte ich ein responsives Design, damit ich auch auf mobilen Geräten einfach auf das Tool zugreifen und Einstellungen vornehmen kann.
##### Akzeptanzkriterien
  - Das Admin-Dashboard passt sich verschiedenen Bildschirmgrößen (Desktop, Tablet, Smartphone) automatisch an.
  - Alle Funktionen des Dashboards sind auf mobilen Geräten genauso nutzbar wie auf dem Desktop.

#### U16: Als Kunde möchte ich, dass das Tool auch auf mobilen Geräten einfach zu bedienen ist, um Dateien von meinem Smartphone oder Tablet hochladen zu können.
##### Akzeptanzkriterien
  - Die Nutzeroberfläche passt sich auf mobilen Geräten automatisch an.
  - Der Upload-Prozess ist auch auf Smartphones und Tablets benutzerfreundlich gestaltet (z.B. Drag-and-Drop funktioniert, Buttons sind groß genug für Touchscreens).

#### U17: Als Kunde möchte ich die Möglichkeit haben, den Upload-Prozess abzubrechen, falls ich versehentlich die falschen Dateien ausgewählt habe.
##### Akzeptanzkriterien
  - Während des Uploads gibt es eine gut sichtbare "Abbrechen"-Option.
  - Bei Abbruch des Uploads wird eine klare Bestätigung angezeigt, dass der Vorgang gestoppt wurde und keine Dateien hochgeladen wurden.

#### U18: Als Kunde möchte ich Dateien von meinem mobilen Gerät hochladen und später von einem anderen Gerät (z.B. meinem Rechner) herunterladen können, um flexibel auf meine Dateien zuzugreifen.
##### Akzeptanzkriterien:
  - Nach dem Upload erhalte ich einen **permanenten Download-Link**, der es mir ermöglicht, die optimierten Dateien später von einem anderen Gerät herunterzuladen.
  - Der Download-Link kann sowohl vom Mobilgerät als auch vom Rechner aufgerufen werden.
  - Es gibt eine Option, den Download-Link z.B. per E-Mail oder QR-Code an das andere Gerät zu übertragen.
  - Falls der Download auf einem anderen Gerät erfolgen soll, wird nach dem Upload eine klare Anleitung oder Option angeboten, wie die optimierten Dateien später heruntergeladen werden können.

