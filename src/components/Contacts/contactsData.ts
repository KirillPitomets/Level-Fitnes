type contacts = {
  id: string,
  name?: string,
  data: string,
  href?: string,
}

const contactsData: contacts[] = [

  {
    id: 'date',
    data: 'Понедельник — Пятница: 07:00–23:00 Суббота — Воскресенье: 09:00–22:00',
  },
  {
    id: 'address',
    name: 'Адрес',
    data: 'г. Батайск, М. Горького, д. 84',
    href: 'https://www.google.com.ua/maps/@50.444801,30.5177852,12z?hl=ru',
  },
  {
    id: 'phoneNumber',
    name: 'Телефон',
    data: '+7 (863) 272–72–77',
    href: '+7 (863) 272–72–77'
  },
]

export default contactsData;