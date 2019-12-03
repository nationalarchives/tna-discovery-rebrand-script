let body = document.getElementsByTagName('body')[0];


// Add ViewBag.CurrentPage = "taglist"; to RDWeb/Views/TagList/TaggingIndex.cshtml in Windows

if(window.location.href.startsWith('https://test-discovery.nationalarchives.gov.uk/tags/')
    ||  window.location.href.startsWith('https://test-discovery.nationalarchives.gov.uk/tagdetails/')
    || window.location.href.startsWith('https://cdev-discovery.nationalarchives.gov.uk/tags/')
    ||  window.location.href.startsWith('https://cdev-discovery.nationalarchives.gov.uk/tagdetails/')  ){
   body.classList.add('taglist');
}

if(window.location.href.startsWith('https://test-discovery.nationalarchives.gov.uk/basket') ||
    window.location.href.startsWith('https://cdev-discovery.nationalarchives.gov.uk/basket')){
   body.classList.add('basket');
}

if(window.location.href.startsWith('https://test-discovery.nationalarchives.gov.uk/checkout/ordersummary')
   || window.location.href.startsWith('https://cdev-discovery.nationalarchives.gov.uk/checkout/ordersummary')){
   body.classList.add('checkout');
}

if(window.location.href.startsWith('https://test-discovery.nationalarchives.gov.uk/checkout/receiptfailure')) {
   body.classList.add('receipt-page')
}


