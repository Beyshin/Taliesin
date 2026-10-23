const comics = [
  {
    id: 1,
    title: "Batman: Zabójczy Żart",
    issueNumber: 1,
    publisher: "DC Comics",
    releaseYear: 1988,
    creators: {
      writer: "Alan Moore",
      artist: "Brian Bolland"
    },
    characters: ["Batman", "Joker", "James Gordon"],
    description: "Kultowa opowieść o genezie Jokera, która udowadnia, że wystarczy jeden zły dzień, by doprowadzić najzdrowszego człowieka do szaleństwa.",
    cover: "https://comicvine.gamespot.com/a/uploads/scale_large/7/70215/6412169-bkj%201st.jpg"
  },
  {
    id: 2,
    title: "Watchmen (Strażnicy)",
    issueNumber: 1,
    publisher: "DC Comics",
    releaseYear: 1986,
    creators: {
      writer: "Alan Moore",
      artist: "Dave Gibbons"
    },
    characters: ["Rorschach", "Dr. Manhattan", "Ozymandias"],
    description: "Gdy ginie jeden z dawnych bohaterów, Rorschach rozpoczyna śledztwo, które odkrywa spisek mogący zmienić losy świata.",
    cover: "https://upload.wikimedia.org/wikipedia/en/a/a2/Watchmen%2C_issue_1.jpg"
  },
  {
    id: 3,
    title: "The Amazing Spider-Man: Ostatnie łowy Kravena",
    issueNumber: 293,
    publisher: "Marvel Comics",
    releaseYear: 1987,
    creators: {
      writer: "J.M. DeMatteis",
      artist: "Mike Zeck"
    },
    characters: ["Spider-Man", "Kraven the Hunter", "Mary Jane Watson"],
    description: "Kraven Łowca postanawia upolować swoją największą ofiarę – Spider-Mana, aby udowodnić, że jest od niego lepszy.",
    cover: "https://comicvine.gamespot.com/a/uploads/scale_large/11159/111592040/9142436-img_2825.jpeg"
  },
  {
    id: 4,
    title: "Spawn",
    issueNumber: 1,
    publisher: "Image Comics",
    releaseYear: 1992,
    creators: {
      writer: "Todd McFarlane",
      artist: "Todd McFarlane"
    },
    characters: ["Spawn", "Malebolgia", "Violator"],
    description: "Zabity agent rządowy Al Simmons zawiera pakt z siłami piekła, by wrócić na Ziemię i zobaczyć żonę, stając się Hellspawnem.",
    cover: "https://comicvine.gamespot.com/a/uploads/scale_large/5/56044/2466969-spawn__1992__001.jpeg"
  },
  {
    id: 5,
    title: "Sandman: Preludia i nokturny",
    issueNumber: 1,
    publisher: "Vertigo",
    releaseYear: 1989,
    creators: {
      writer: "Neil Gaiman",
      artist: "Sam Kieth"
    },
    characters: ["Morfeusz (Sen)", "Śmierć", "John Constantine"],
    description: "Władca Snów po 70 latach niewoli ucieka, by odzyskać swoje artefakty i odbudować zrujnowane królestwo.",
    cover: "https://comicvine.gamespot.com/a/uploads/scale_large/1/15776/8799596-sandman-preludesandnocturnes1991.jpg"
  }
];

module.exports = comics;