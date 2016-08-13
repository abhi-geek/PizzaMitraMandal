


$('#myModal').modal({
  keyboard: false;
  data-backdrop=true;
})



<script>
$(document).ready(function(){
    $("#loginModal").click(function(){
        $("#loginModal").modal({backdrop: true});
    });
    $("#reserveform").click(function(){
        $("#reserveform").modal({backdrop: true});
    });
});
</script>



