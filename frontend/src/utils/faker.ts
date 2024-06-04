import {faker} from '@faker-js/faker'

export const generateRandomData = (count=100) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    const id = faker.string.uuid();
    const job = faker.person.jobType();
    const image = faker.image.avatar();
    const company = faker.company.name();
    const salary = faker.commerce.price({ min: 100, max: 400 });
    const location = faker.location.city();
    // const description = faker.lorem.paragraph();
    const deadline = faker.number.int({ min: 2, max: 14 })
    data.push({ id, job, image,company,salary,location, deadline });
  }
  return data;
};
