export async function fetchFirstSection() {
  const data = await fetch("http://localhost:1337/api/first-section");
  const content = await data.json();
  return content;
}

export async function fetchHome() {
  const data = await fetch("http://localhost:1337/api/home");
  const content = await data.json();
  return content;
}

export async function fetchSecondSection() {
  const data = await fetch("http://localhost:1337/api/second-section");
  const content = await data.json();
  return content;
}

export async function fetchThirdSection() {
  const data = await fetch("http://localhost:1337/api/third-section");
  const content = await data.json();
  return content;
}

export async function fetchFourthSection() {
  const data = await fetch("http://localhost:1337/api/fourth-section");
  const content = await data.json();
  return content;
}

export async function fetchFifthSection() {
  const data = await fetch("http://localhost:1337/api/fifth-section");
  const content = await data.json();
  return content;
}

export async function fetchPricingSection() {
  const data = await fetch("http://localhost:1337/api/pricing-section");
  const content = await data.json();
  return content;
}
