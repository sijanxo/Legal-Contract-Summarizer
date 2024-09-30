(() => { 
  // Try to find elements that likely contain the terms and conditions. 
  const possibleSelectors = [ 
  'div:contains("Terms and Conditions")', 
  'div:contains("Terms of Service")', 
  'div:contains("Privacy Policy")', 
  'p:contains("Terms and Conditions")', 
  'p:contains("Terms of Service")', 
  'p:contains("Privacy Policy")' 
  ]; 
  // Loop through the possible selectors and try to find relevant text. 
  for (let selector of possibleSelectors) { 
    let element = document.querySelector(selector); 
    if (element) { 
      return element.innerText; 
    } 
  } 
  // If no specific terms and conditions element is found, return the body text. 
  return document.body.innerText; 
  // Fallback to full page text if nothing is found. 
})();
