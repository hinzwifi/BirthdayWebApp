export const searchFunction =  () => {
    var input, filter, tr, table,td, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toLowerCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByClassName("birthday-people");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByClassName("something")[0];
    
    if (td) {
      txtValue = td.textContent || td.innerText;
      const something = txtValue.toLowerCase().indexOf(filter) > -1
      if (something) {
        tr[i].style.display = "";
        
      } else {
        tr[i].style.display = "none";
        
      }
    }
  }

}

