const players = [
    {
      name: "Cristiano Ronaldo",
      team: "Manchester United",
      age: 36,
      imageURL: "https://www.google.com/search?sca_esv=575267179&rlz=1C1GCEA_enTN1041TN1041&biw=1707&bih=811&sxsrf=AM9HkKlm_rmnxtRlZbhEJ6g_mu-WISxpDA:1697830214122&q=Messi&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjMurS2roWCAxX5g_0HHVb1DfwQ0pQJegQIDBAB#imgrc=kXqV25fBH4ON4M",
    },
    {
      name: "Lionel Messi",
      team: "Paris Saint-Germain",
      age: 34,
      imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fhussamuddin3333%2Fnamar-jr%2F&psig=AOvVaw0klCqZL1Y2uZij7uLRy31-&ust=1697917017570000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJiZuvevhYIDFQAAAAAdAAAAABAE",
    },
    {

      name: "Neymar Jr.",
      team: "Paris Saint-Germain",
      age: 29,
      imageURL: "data:image/jpeg;base64,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",
    },
    {
      name: "Kylian Mbappé",
      team: "Paris Saint-Germain",
      age: 23,
      imageURL: "data:image/jpeg;base64,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",
    },
  ];
  
  export default players;