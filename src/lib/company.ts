// Authentic company details taken from the original proplinerealty.in footer.
export const COMPANY = {
  name: "Propline Realty Services Pvt. Ltd.",
  short: "Propline Realty",
  phoneDisplay: "+91 96200 47666",
  phoneTel: "+919620047666",
  whatsapp: "https://wa.me/919620047666",
  email: "proplinerealty@gmail.com",
  address: "25/1, 2nd Floor, MIG, KHB Colony, Koramangala Layout, Bengaluru, Karnataka 560095, India",
  mapQuery: "25/1 MIG KHB Colony Koramangala Bengaluru 560095",
};

export const CITIES = ["Bengaluru", "Ahmedabad", "Chennai", "Delhi", "Hyderabad", "Kolkata", "Mumbai", "Pune"];

export const CATEGORIES = {
  Residential: ["Apartments", "Independent House / Villa", "Farm House", "Plot / Land"],
  Commercial: ["Office Space", "Showroom / Shop"],
};

export function whatsappLink(message: string) {
  return `${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;
}
