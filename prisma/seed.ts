import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 20; i++) {
    await prisma.user.create({
      data: {
        name: faker.person.firstName(),
        surname: faker.person.lastName(),
        username: faker.internet.userName(),
        dateOfBirth: faker.date.past().toISOString(),
        email: faker.internet.email(),
        telephone: faker.number.int(),
        recoveryEmail: faker.internet.email(),
        gender: faker.person.sexType(),
        image: faker.image.avatar(),
        hashedPassword: faker.internet.password(),
        favoriteIds: [],
      },
    });
  }

  console.log('Database seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
