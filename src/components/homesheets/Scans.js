"use client"

import { Box } from "@mui/system"
import Chapters from "../scans/Chapters"
import Scan from "../scans/Scan"
import { useState } from "react"

export default function Scans() {
  let scans = [
    {
      id: 1,
      name: "Naruto Shippuden",
      profile: "/photos/scan1/poster.jpg",
      description:
        "Naruto: Shippuden is an anime series mainly adapted from Part II of Masashi Kishimoto's original manga series, with exactly 500 episodes. It is set two and a half years after the original series in the Naruto universe, following the ninja teenager Naruto Uzumaki and his allies. The series is directed by Hayato Date, and produced by Pierrot and TV Tokyo. It began broadcasting on February 15, 2007, on TV Tokyo, and concluded on March 23, 2017.[1][2]On January 2, 2009, Viz Media and Crunchyroll provided eight English subtitled Naruto: Shippuden episodes on the official Naruto website.[3] Later the following 2 weeks, Viz began providing subtitled versions of the latest Naruto: Shippuden episodes a week after they first aired in Japan, with a new episode being added to the Naruto website each subsequent Thursday.[3] On July 24, 2009, Viz Media announced that the series would be released on the iTunes Store.[4] The first DVD release of the series in North America was released on September 29, 2009.[5] The English dub of Naruto: Shippuden made its US premiere on Disney XD on October 28, 2009.",
      status: "on-going",
      rating: 8.9,
      bg: "$/photos/bg1.jpg",
    },
    {
      id: 2,
      name: "Jujutsu Kaisen",
      profile: "/photos/scan2/poster.jpg",
      description:
        "Jujutsu Kaisen (呪術廻戦, 'Sorcery Fight') is a Japanese manga series written and illustrated by Gege Akutami. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since March 2018, with its chapters collected and published in 23 tankōbon volumes as of July 2023. The story follows high school student Yuji Itadori as he joins a secret organization of Jujutsu Sorcerers to eliminate a powerful Curse named Ryomen Sukuna, of whom Yuji becomes the host. Jujutsu Kaisen is a sequel to Akutami's Tokyo Metropolitan Curse Technical School, serialized in Shueisha's Jump Giga from April to July 2017, later collected in a tankōbon volume, retroactively titled as Jujutsu Kaisen 0, in December 2018.",
      status: "on-going",
      rating: 7.8,
      bg: "$/photos/bg1.jpg",
    },
  ]

  let chapters = [
    {
      id: 1,
      name: "Childhood",
      ch_no: 1,
      scan_id: 1,
    },
    {
      id: 2,
      name: "Orochimaru",
      ch_no: 2,
      scan_id: 1,
    },
    {
      id: 3,
      name: "Gara",
      ch_no: 3,
      scan_id: 1,
    },
    {
      id: 4,
      name: "Obito",
      ch_no: 4,
      scan_id: 1,
    },
    {
      id: 5,
      name: "Ryomen Sukuna",
      ch_no: 1,
      scan_id: 2,
    },
    {
      id: 6,
      name: "Secret Execution",
      ch_no: 2,
      scan_id: 2,
    },
    {
      id: 7,
      name: "For Myself",
      ch_no: 3,
      scan_id: 2,
    },
    {
      id: 8,
      name: "Girl of Steel",
      ch_no: 4,
      scan_id: 2,
    },
  ]

  const [currentIteration, setCurrentIteration] = useState(0)
  const [currentScan, setCurrentScan] = useState(scans[currentIteration])
  const [currentScanChapters, setCurrentScanChapters] = useState(
    chapters.filter((chapter) => chapter.scan_id === scans[0].id)
  )

  const updateCurrentScanStates = (newIteration) => {
    setCurrentIteration(newIteration)
    setCurrentScan(scans[newIteration])
    const csid = scans[newIteration].id
    const csc = chapters.filter((chapter) => chapter.scan_id === csid)
    setCurrentScanChapters(csc)
  }

  const handleBtnNext = () => {
    if (currentIteration < 3) {
      let newIteration = currentIteration + 1
      updateCurrentScanStates(newIteration)
    }
  }

  const handleBtnPrev = () => {
    if (currentIteration > 0) {
      let newIteration = currentIteration - 1
      updateCurrentScanStates(newIteration)
    }
  }
  return (
    <Box sx={{ display: "flex", padding: "0 0 50px 0" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Scan
          data={currentScan}
          currentIteration={currentIteration}
          handleBtnNext={handleBtnNext}
          handleBtnPrev={handleBtnPrev}
        />
      </Box>
      <Chapters data={currentScanChapters} />
    </Box>
  )
}
