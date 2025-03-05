import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchFirstSection() {
  const { data } = await axios.get(`${API_BASE_URL}/api/first-section`);
  return data;
}

export async function fetchHome() {
  const { data } = await axios.get(`${API_BASE_URL}/api/home`);
  return data;
}

export async function fetchSecondSection() {
  const { data } = await axios.get(`${API_BASE_URL}/api/second-section`);
  return data;
}

export async function fetchThirdSection() {
  const { data } = await axios.get(`${API_BASE_URL}/api/third-section`);
  return data;
}

export async function fetchFourthSection() {
  const { data } = await axios.get(`${API_BASE_URL}/api/fourth-section`);
  return data;
}

export async function fetchFifthSection() {
  const { data } = await axios.get(`${API_BASE_URL}/api/fifth-section`);
  return data;
}

export async function fetchPricingSection() {
  const { data } = await axios.get(`${API_BASE_URL}/api/pricing-section`);
  return data;
}

export async function fetchFooter() {
  const { data } = await axios.get(`${API_BASE_URL}/api/footer`);
  return data;
}

export async function fetchPricingExtra() {
  const { data } = await axios.get(`${API_BASE_URL}/api/pricing-page-extra  `);
  return data;
}
