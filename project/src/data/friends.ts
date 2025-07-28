export interface Friend {
  id: string;
  name: string;
  x: number;
  y: number;
  message?: string;
  image?: string;
  specialContent?: any;
}

export const friends: Friend[] = [
  {
    id: 'murasaio',
    name: 'Murasaio',
    x: 15,
    y: 20,
    message: 'Mensagem especial do Murasaio será adicionada aqui...'
  },
  {
    id: 'luna',
    name: 'Luna',
    x: 25,
    y: 35,
    message: 'Mensagem especial da Luna será adicionada aqui...'
  },
  {
    id: 'baldin',
    name: 'Baldin',
    x: 40,
    y: 15,
    message: 'Mensagem especial do Baldin será adicionada aqui...'
  },
  {
    id: 'prisma',
    name: 'Prisma',
    x: 60,
    y: 30,
    message: 'Mensagem especial do Prisma será adicionada aqui...'
  },
  {
    id: 'gester',
    name: 'Gester',
    x: 75,
    y: 45,
    message: 'Mensagem especial do Gester será adicionada aqui...'
  },
  {
    id: 'leo',
    name: 'Leo',
    x: 20,
    y: 60,
    message: 'Mensagem especial do Leo será adicionada aqui...'
  },
  {
    id: 'shuri',
    name: 'Shuri',
    x: 45,
    y: 70,
    message: 'Mensagem especial da Shuri será adicionada aqui...'
  },
  {
    id: 'mayron',
    name: 'Mayron',
    x: 70,
    y: 65,
    message: 'Mensagem especial do Mayron será adicionada aqui...'
  },
  {
    id: 'angelo',
    name: 'Angelo',
    x: 85,
    y: 25,
    message: 'Mensagem especial do Angelo será adicionada aqui...'
  },
  {
    id: 'guitca',
    name: 'Guitca',
    x: 55,
    y: 50,
    message: 'Mensagem especial do Guitca será adicionada aqui...'
  },
  {
    id: 'beatriz',
    name: 'Beatriz',
    x: 50,
    y: 40,
    message: `Feliz aniversário, meu vampirinho

Hoje é seu dia, e eu fico pensando em tudo que me faz amar você tão profundamente.

Você é o meu doce, meu príncipe, meu nerd preferido, meu vampirinho.

Feliz aniversário, amor. Que a vida continue te dando motivos pra sorrir, e que eu continue tendo o privilégio de ser um deles.

Com amor,
Beatriz`,
    specialContent: {
      isBeatriz: true,
      musicUrl: 'https://open.spotify.com/track/754kgU5rWscRTfvlsuEwFp?si=0vgqpaK7QhSlYitj664XMQ'
    }
  }
];