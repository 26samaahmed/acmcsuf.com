interface Officer {
  name: string;
  title: string;
  picture?: string;
  url?: string;
}

export const officers: Record<string, Officer[]> = {
  "2021-2022": [
    {
      name: "TBD",
      title: "2021-2022 🚀",
    },
  ],
  "2020-2021": [
    {
      name: "Jacob Nguyen",
      title: "President/Create Director",
      picture: "jacob-nguyen.png",
    },
    {
      name: "Aaron Lieberman",
      title: "Internal Vice President",
      picture: "aaron-lieberman.png",
    },
    {
      name: "Samuel Sandoval",
      title: "Dev Director",
      picture: "samuel-sandoval.png",
    },
    {
      name: "Ethan Davidson",
      title: "Webmaster 😎",
      picture: "ethan-davidson.png",
      url: "https://github.com/EthanThatOneKid",
    },
    {
      name: "Mike Ploythai",
      title: "Create Officer",
      picture: "mike-ploythai.png",
    },
    {
      name: "Andrew Lau",
      title: "Treasurer",
      picture: "andrew-lau.jpg",
    },
    {
      name: "Jason Anthony",
      title: "Secretary",
      picture: "jason-anthony.png",
    },
    {
      name: "Shaleen Mathur",
      title: "Co-Workshop Manager",
      picture: "shaleen-mathur.png",
    },
    {
      name: "Nicolas Renteria",
      title: "Marketing Chair",
      picture: "nicolas-renteria.png",
    },
    {
      name: "Joshua Hughes",
      title: "ICC Representative",
      picture: "joshua-hughes.png"
    },
    {
      name: "Samuel Valls",
      title: "Community Manager",
      picture: "samuel-valls.png",
    },
    {
      name: "Wilbert Rodriguez",
      title: "Intern Program Manager",
      picture: "wilbert-rodriguez.png",
    },
    {
      name: "Johnson Tong",
      title: "Co-Workshop Manager",
      picture: "johnson-tong.png",
    },
    {
      name: "Kavit Sanghavi",
      title: "Algo Director",
      picture: "kavit-sanghavi.png",
    },
    {
      name: "Kevin Dillon",
      title: "Algo Officer",
      picture: "kevin-dillon.png",
    },
    {
      name: "Parth Sharma",
      title: "Algo Officer",
      picture: "parth-sharma.png",
    },
    {
      name: "Wesley Chou",
      title: "Dev Officer",
      picture: "wesley-chou.png",
    },
    {
      name: "Armanul Ambia",
      title: "Dev Officer",
      picture: "armanul-ambia.png",
    },
    {
      name: "Lisa Hong",
      title: "Create Officer",
      picture: "lisa-hong.png",
    },
    {
      name: "Taylor Noh",
      title: "NodeBuds Officer",
      picture: "taylor-noh.png",
    },
    {
      name: "Eugene Lee",
      title: "NodeBuds Officer",
      picture: "eugene-lee.png",
    },
  ],
};

export const allOfficers = Object.entries(officers).reduce(
  (result, [year, officers]) => [...result, ...officers],
  [] as Officer[]
);
