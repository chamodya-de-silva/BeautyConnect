export const beautyServicesCategories = {
  "Hair Services": [
    "Hair Cut", "Hair Trim", "Hair Wash", "Hair Drying", "Hair Styling", 
    "Hair Straightening", "Hair Curling", "Hair Coloring", "Hair Highlights", 
    "Hair Rebonding", "Hair Relaxing", "Hair Smoothening", "Hair Treatment", 
    "Keratin Treatment", "Hair Spa", "Scalp Treatment", "Hair Extensions", 
    "Hair Botox Treatment", "Bridal Hair Styling"
  ],
  "Makeup Services": [
    "Party Makeup", "Bridal Makeup", "Engagement Makeup", "Casual Makeup", 
    "HD Makeup", "Airbrush Makeup", "Photoshoot Makeup", "Evening Makeup", 
    "Eye Makeup", "Saree Draping", "Groom Makeup"
  ],
  "Facial & Skincare Services": [
    "Basic Facial", "Gold Facial", "Fruit Facial", "Acne Treatment Facial", 
    "Anti-aging Facial", "Skin Brightening Facial", "Cleanup", "Face Bleaching", 
    "Detan Treatment", "Hydrating Facial", "Skin Polishing", "Blackhead Removal"
  ],
  "Nail Services": [
    "Manicure", "Pedicure", "Nail Art", "Gel Nails", "Acrylic Nails", 
    "Nail Extensions", "Nail Polish Application", "French Manicure", 
    "Nail Repair", "Nail Removal"
  ],
  "Waxing Services": [
    "Full Body Waxing", "Arm Waxing", "Leg Waxing", "Face Waxing", 
    "Underarm Waxing", "Bikini Waxing", "Chocolate Waxing", "Threading"
  ],
  "Eyebrow & Eyelash Services": [
    "Eyebrow Threading", "Eyebrow Shaping", "Eyebrow Tinting", 
    "Eyelash Extensions", "Eyelash Lifting", "Eyelash Tinting", "Brow Lamination"
  ],
  "Massage & Spa Services": [
    "Head Massage", "Body Massage", "Foot Massage", "Aromatherapy", 
    "Spa Treatment", "Body Scrub", "Relaxation Therapy"
  ],
  "Bridal Services": [
    "Bridal Package", "Homecoming Bride Package", "Pre-shoot Makeup", 
    "Dressing Assistance", "Saree Draping", "Bridal Hair Styling", "Bridal Nail Package"
  ]
};

// Flattened list for easy access
export const allBeautyServices = Object.values(beautyServicesCategories).flat();
