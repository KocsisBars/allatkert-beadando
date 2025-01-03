import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.animals.createMany({
    data: [
      { name: "Lionel", breed: "Lion", age: 5 },
      { name: "Ellie", breed: "Elephant", age: 12 },
      { name: "Zara", breed: "Zebra", age: 7, adoptiveName: "John Doe" },
      { name: "Kiki", breed: "Kangaroo", age: 4 },
      { name: "Bella", breed: "Bear", age: 6 },
      { name: "Ravi", breed: "Rabbit", age: 2, adoptiveName: "Jane Smith" },
      { name: "Mimi", breed: "Monkey", age: 8 },
      { name: "Toby", breed: "Tortoise", age: 110 },
      { name: "Oscar", breed: "Ostrich", age: 9 },
      { name: "Polly", breed: "Parrot", age: 3 },
    ],
  });
  console.log('Seeded data!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });