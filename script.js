const products = [
  {
    name: "Spyroid v7.7",
    price: "$49",
    image: "https://media-hosting.imagekit.io/c1193cf35c424ac8/1000008877.jpg?Expires=1840156748&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bHCOx1DMr-cMUL5MRru50aAQzWlF59ThlZeRl-NrPIeRfXia5NyieqMIwmBGavZSavV-e5crbvkQbuZwP7lWA-0oirmnIcC3GYO5CwEQQDctd-siuomSS6HpbVDYd488SQIKEZwHwZ1lOY7m02QdvDv6dz7tQrBdSMBszQmAzeYG7p4im4Mdt4Q-zpQE6a2z9frjnfYWJVtJmc-7hdJKj-5ewL~k8SMmPzCAETTtJnPngoebWYc-xfJlOMVNfE34IJsCBBKHak5MVlEBo2veGb5l8P71GUpbgTp9nUWVcTBr93a~r2GJ~N3AZXX1DvKG~zxdWmJbRL-qs6SbiXsbMQ__"
  },
  {
    name: "BTMOB RAT",
    price: "$45",
    image: "https://media-hosting.imagekit.io/65825fb759114b78/1000008879.jpg?Expires=1840156972&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jkF3Hd2347f2um1c-IeyZ2wRBUGl2dt4Ug~35j-XMgE0jWPI08XnLIL6ehwFUKKZhbME-UODikvh5yYSiT~Vk2uJVVEJmFfZdrGBVXEvCl9QNOWLF-JkwkPkScN3WYh3d~yWguQxTeeIu1928ClkfUozjMXY61Hx-K2psHtUWrRnegbb0PIfwN9TRUKfeFTRn3ERIxes5bVrmd0dq6hW1wwEBNquj0aw8gyfGtLWNyNsWYQi5hF7Jf9vjdtfXbl1W8KPJfOfwf9M12ngOWL9pAUDeW3IQD7tk-8nAnmGvxU9GsKAfI2NeEzMUaKDOPuAWP4wYMxTwDmW9dirUIDYRA__"
  },
  {
    name: "Ghost RAT",
    price: "$39",
    image: "https://media-hosting.imagekit.io/df28559e56be4ca5/1000008876.jpg?Expires=1840156251&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=pWsSciNTqSCZGsGTO4oaFLc9~ytDhJou3478n6ZC~3GiwPRa-d8-0MC2~UgDlcmVm0pn8Cgs0LQZ5igNPbZvICC40unyIzSwFd0rvOAwu0o5qAjfGyR4kJeypE0fbWytU2iohPVHKXOaefcbbOr-zHRUx3RNhfycT80K9wEwGgr3pNpDDi-l-bnly6n6ZfcML6OIKCG5cMzk1W2pC0XXq8e65MTEytxInWLqZCHGGbs8X~0oG4AW2eHnfAL9D9~w-LYW47uH1TC0oxpJkvSot2X~ixKs~D5D8idzyn9-BwON5iUCBhoG74TW9yddAxD-vlbWGgJHmjT7iXacRwc9Ow__"
  },
  {
    name: "Craxs RAT v7.6",
    price: "$79",
    image: "https://media-hosting.imagekit.io/9de25cd5229a4e38/1000008871.jpg?Expires=1840154469&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=u16Ic5xr9w-mWTC7XEvIoBV57Owva5inKDNx6rjGdO2M1hrkxZcSYdWU0wJKd7QpeAUsDX3JiAU0Kpznd8rjraXGTBYSzFiZqN1BZuH6ZmsAfXuv2NrVrqjdoRdalCGJkIiaHDg5-TJX6z11n0IEkPRDNhm3pU12pdGFQBT-HYniac6uf1FVuTI9Yn22x4TElhVycZG3~h5iq1tD4D3AAANCa2C70HdY0BLAaC5f-Bh7~56BuC0RY5la~L~x4nFR-9hzWq5qOuXd~~~fxLK1XuiKqCMeTkTfbK8ijHBS3cDSLCjv245Zd2hfKz-bhQmEl5HXkug8lsSRGj6lkAgNIg__"
  },
  {
    name: "Big Shark RAT",
    price: "$59",
    image: "https://media-hosting.imagekit.io/4f463e12cc97426c/1000008872.jpg?Expires=1840154626&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=pkHpcj2DnFT1PNEz8zHIA6MbUskyizDTCDr0VXDzKLG6OL9sS5eKN8kV3EchJFSSnfaIdWEoqo5TjOT~qCvHsqoo5gDcah7lJoRKzKztVUDnA2yM~Ggh3KC5hLHPOVy6Yama-xRan8iSh2U~j58gVvy5OZU2Hy9Cg7DVXzuyVsqgK~8Vu9n4iY8pmusO3U3kdMhxF~KRBHen~BEUNDNCPIW2bizXaNEKuUTrTc5TkRGrP9~VXPBxK4Aa4SCdDm1vDpZTsa5ybEcaCir09fVoGV89gnyI--5FfehZZtTtKEIAh5cH8asyijUvvYU7-CYINQJyruRPUJu5I-NAsTsllQ__"
  },
  {
    name: "Violet RAT",
    price: "$65",
    image: "https://media-hosting.imagekit.io/d2654da1b38c4617/1000008874.jpg?Expires=1840155143&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=YX71fskWF7ortsB8LtFDw1tvkXT3-8ZX9U15yXOcocojRqAIT3p9tX2iIlWYBuV3m-HZxbz0MtV7d9P999lvQc6-7ruVF7BSLAweBA8kWWHX32XhjrrdSFxBaonGZ6PaW26qzdQwDXUgtkTq95p-JGZH9XnX0c3LfAz6xRFqOkmeBKbqrIEzwKfAfAyo-MPVwkoj1AGB1cgXqa1HcvNJHkjiHSW~5CC2yXvep3DKUR9umgnMO7pcRk3WrSY93NFW7xZ~GOC6vUUZQl0STZ-eplKoVGbNc8KMzrn~KbG2IJh6-Xn4zio6L04M0FLiYPp9yo3BzwFLpzu9-KuniIXprQ__"
  },
  {
    name: "Tianxian66 License RAT",
    price: "$75",
    image: "https://media-hosting.imagekit.io/38c629e7bafc4630/1000008875.jpg?Expires=1840156061&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=2XPUJxSiPnTSM2vKKKLdnjeCBrlzRuUuvglaM-5344z8uscNj-sHs6vAPCtO7fTDc6MVGohFb6gCRGZnja50Q032IxDYAz3h~KJli8hNsr2MNPgd~CEjA-ocxeAwMuP~qCOqeycmDEp8KTtPmXw5NREZO~2aAQK7GAuGe3l23vaIjyaNLqtKIVPHtJ2r~Df9-pFBDlPJfLW2jFeNpyNamV8-7zY8CA5QDOaW80SLXTEkU6X9x1s6KW-m~zE0XDG58-tez~rcvLgnNS3o~wvzT1h8UIC9cQ05cNFoZzHM~5uUMMj9fRh7HErrUlDwgYkH9tPckTi72d1EReW5wLCutw__"
  }
  {
  name: "G700 RAT",
  price: "$99",
  image: "https://media-hosting.imagekit.io/99a185b6956d48ea/1000008880.jpg?Expires=1840168781&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=J~Epo01pn2V51hdsOj9pTNhIktjNjzE62fVEtclbzuu1VyuL46gUWJFLIq9FatFcANKu8CugZ2wCG~NRBbiA78Eej5X~YzyYsnHq1QiA82~JwqvPbiamQ0l-fJA7LLsENsH0EJb32-H2fB7ZQWZVNAx-3BYXaEG-jdlbB2BKI-pPnAbkKflFDkYIaRpy6CSgDhGSwm5Yn73iYMVyH04wet1eAQE9c3u53c1AjoB1ay3L8n2V-KQ6SANxjP4TANOmJjL7vA3~b8h8DcF0PGDIeBcsG~W4PvkBX8Eb4oPgoyEvXLIEuQr37aWLn0GXHHxwsG8fNekR07JdvBR-WjW1Mg__"
},
{
  name: "DEMONIC RAT",
  price: "$60",
  image: "https://media-hosting.imagekit.io/12c5a4b5581645e8/1000008887.jpg?Expires=1840168871&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=r9X8aEn52h4VOs-RUoftzeC0JONK9BhoJ2EFYXyU2I3lAH91TGFiUGLJdyVcgvQQDCncDNDsjK6rhtsjcdW3unjs6gFOaMdRISkoCfR1sfz5pmf~lJu0wPaW7g8IxGykx620Inz6Y7HyWLeMmFjx-mAmkUlzg5R8Ny2W1cytSjUdmTULsgG~kgvjnnnYIHfMq2kyTBfeiM7gWE884fRyCbEsQLO8uLd000H0mzSfQm~YUDozDzcFXHrmApAiaB38k-lr2wH-MQoz5oNUT~pUJbPF4zEkesX2eEUXwCC2lXmfup4PsBfDSVLrNO8lS5So7lCty7JCv~PZbi70~b4rEA__"
},
{
  name: "G5 RAT",
  price: "$75",
  image: "https://media-hosting.imagekit.io/07303cb3fc154431/1000008888.jpg?Expires=1840169142&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0Af3MF7eDMOnxRfQ2XHcr0tpP-W84uFYmNcJ~fRKVUklTkeB1kpe~5IOAbIq6DBtlrNUC32XXMGh5SRAG~qXEe5WBicWGF2GmUz3bJ1Ek2WRmbpy7JZdRx61KfyJykbQwfJ99rJysnhg4rKeAE4CIRS-dXP~EPqUXaKn7Dcmemm3RhNK7wXsdOT-kXYW-Dhddl0l3RazMsc6TIuubV8gGIv9x1yyQstt5E7mekiwVN1n~nH9Bs9mLiUzb88LQ4SwS6IsKUi1r3ROJS4Tl3odlPxPlxHeAwrynjlj~1plh1fPrFL9ySX-LcBa8e37RMFPa-ltY-vA5Tw44G8313HR4g__"
},

];

const container = document.getElementById("products");

products.forEach(p => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>Price: ${p.price}</p>
    <button onclick="buyNow('${p.name}')">Buy on Telegram</button>
  `;
  container.appendChild(div);
});

function buyNow(productName) {
  window.open("https://t.me/CIPHERNOVAX909", "_blank");
}