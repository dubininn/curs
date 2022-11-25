
  const validation = new JustValidate('.about__form');


  validation
    .addField('.name', [{
        rule: 'minLength',
        value: 3,
        errorMessage: "Минимум три символа"
      },
      {
        rule: 'maxLength',
        value: 50,
        errorMessage: "Вы ввели больше чем положено"
      }
    ])
    .addField('.mail', [{
        rule: 'required',
        errorMessage: 'Введите e-mail',
      },
      {
        rule: 'email',
        errorMessage: 'Вы не корректно ввели email',
      }
    ])

    .addField('.checkbox', [{
      rule: 'required',
      errorMessage: 'Нужно поставить галочку',
    },
  ])

  .addField('.text', [{
    rule: 'minLength',
        value: 20,
        errorMessage: "Cообщение не меньше 20 символов"
  },
])
