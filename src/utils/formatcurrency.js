function formatCurrency(amount) {
    return amount.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' }); 
  }
  
  export default formatCurrency; 