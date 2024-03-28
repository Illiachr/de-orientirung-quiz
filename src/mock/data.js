const data = {
  questions: [
    {
      id: 1,
      text: 'In Deutschland dürfen Menschen offen etwas gegen die Regierung sagen, weil ...',
      options: [
        {
          label: 'a',
          text: 'hier Religionsfreiheit gilt.',
          correct: false
        },
        {
          label: 'b',
          text: 'die Menschen Steuern zahlen.',
          correct: false
        },
        {
          label: 'c',
          text: 'die Menschen das Wahlrecht haben.',
        correct: false
        },
        {
          label: 'd',
          text: 'hier Meinungsfreiheit gilt.',
          correct: true
        },
      ]
    },
    {
      id: 2,
      text: 'In Deutschland können Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der Schule am ...',
      options: [
        {
          label: 'a',
          text: 'Geschichtsunterricht teilnimmt.',
          correct: false
        },
        {
          label: 'b',
          text: 'Religionsunterricht teilnimmt.',
          correct: true
        },
        {
          label: 'c',
          text: 'Politikunterricht teilnimmt.',
          correct: false
        },
        {
          label: 'd',
          text: 'Sprachunterricht teilnimmt.',
          correct: false
        },
      ]
    },
    {
      id: 3,
      text: 'Deutschland ist ein Rechtsstaat. Was ist damit gemeint?',
      options: [
        { 
          label: 'a',
          text: 'Alle Einwohner / Einwohnerinnen und der Staat müssen sich an die Gesetze halten.',
          correct: true
        },
        {
          label: 'b',
          text: 'Der Staat muss sich nicht an die Gesetze halten.',
          correct: false
        },
        {
          label: 'c',
          text: 'Nur Deutsche müssen die Gesetze befolgen.',
          correct: false
        },
        {
          label: 'd',
          text: 'Die Gerichte machen die Gesetze.',
          correct: false
        },
      ]
    }
  ]
};

export default data;