const questions = [
    {
        id: 1,
        question: " True or False: The capital of New York is Albany?",
        answer: "TRUE",
    
    },
    {
        id: 2,
        question: "Multiple choice: \n\ What Alphabet is utilized in the English Language? \n\ A: Arabic \n\ B: Latin \n\ C: Greek \n\ D: Cyrillic",
        answer: "B",
    },
    {
        id: 3,
        question: "Fill in the blank \n\ 'Alea Iacta est'(The die is cast), the famous words spoken by Caesar after crossing the _____ River",
        answer: "RUBICON",
    },
    {
        id: 4,
        question: "Multiple choice: \n\ 'S.P.Q.R' an abbreviation of 'Senatus Populusque Romanus' in latin translates to? \n\ A: Some people que in Rome \n\ B: When in Rome do as the romans \n\ C: The senate and the people of Rome \n\ D: The senate and the Roman People",
        answer: "D",
    },
    {
        id: 5,
        question: "Multiple choice \n\ The 'Reinheitsgebot' (purity law) is a regulation created in 16th century Germany to regulate what? \n\ A: Beer \n\ B: Marriage \n\ C: Sausage \n\ D: religious practices ",
        answer: "A"
    },
    {
        id: 6,
        question: "True or False: The county, and town, of Herkimer New York are named after a genral of the American Revolution?",
        answer: "TRUE",
    },
    {
        id: 7,
        question:"Fill in the blank \n\ The ____ Canal, completed in 1825, lead to ever increasing trade and subsequent growth and prosperity in New YorK",
        answer: "ERIE"
    },
    {
        id: 8,
        question: "Multiple choice \n\ The notorious and flamboyant 'Landsknecht' mercenaries of the 15th through 17th centuries originate in what territory? \n\ A: Poland \n\ B: Rohan \n\ C: The Holy Roman Empire \n\ D: Qatar",
        answer: "C"
    },
    {
        id: 9,
        question: "True or False: While iconic and ubiquitous to the Samurai, the katana was not their favored weapon of the battlefield ",
        answer: "TRUE"
    },
    {
        id: 10,
        question: "Fill in the blank \n\ Socrates is accredited with the statement: 'All I know is _____'",
        answer: "NOTHING"
    }

]
questionAnswers.forEach(q => {
  console.log(`Q${q.id}: ${q.question}`);
  console.log(`Answer: ${q.answer}`);
});