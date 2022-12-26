import sanifyClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';
export const client = sanifyClient({
  projectId: '1rb5l9zy',
  dataset: 'production',
  apiVersion: '2022-07-16',
  useCdn: true,
  token:
    'sksNxZ4r0e66qvgrsrFuBzBbkjzG0yr62cD7sxQcjbKjNERla8r3CrbEjhWUZnDwYgQvsYJCwQjtMXsWmbf6XiLDMYlZi1evz5AowyCtihWiHIeJ54ZfrlIEJTkIfYZsRweujnnD3SumEKkoQBRyRvQ8k2qoBLqIeaIp8qWMYv7PKfrzrzlG',
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
