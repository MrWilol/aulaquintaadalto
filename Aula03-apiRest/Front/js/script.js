function carregarProdutos(){
    var req = new XMLHttpRequest()

    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var produtos = JSON.parse( this.responseText )
            var txt = '<thead>'
                txt = '<tr>'
                txt += '  <th scope="col">  <strong> Código </strong></th>'
                txt += '  <th scope="col">  <strong> Nome </strong></th>'
                txt += '  <th scope="col"> <strong> Preço </strong></th>'
                txt += '  <th scope="col"> <strong> Categoria </strong></th>'
                txt += '</tr>'
                txt += '</thead>'

                txt += '<tbody>'
            produtos.forEach( prod =>{
                txt += '<tr>'
                txt += '<th scope="col"> ' + prod.id + '</th>'
                txt += '<th scope="col"> ' + prod.nome + '</th>'
                txt += '<th scope="col"> ' + prod.preco + '</th>'
                txt += '<th scope="col"> ' + prod.categoria + '</th>'
                txt += '</tr>'
            })

            txt += '</tbody>'
            document.getElementById("divConteudo").innerHTML = txt
        }
    }
    req.open("GET", "http://localhost:8001/product", true)
    req.send()
}   

function carregarCategorias(){
    var req = new XMLHttpRequest()

    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var categoria = JSON.parse( this.responseText )
            var txt = '<thead>'
            var txt = '<tr>'
                txt += '  <th scope="col">  <strong> Código </strong></th>'
                txt += '  <th scope="col">  <strong> Categoria </strong></th>'
                txt += '</tr> '
                txt += '</thead> '

                txt +=  '<thbody>'
            categoria.forEach( cat =>{
                txt +=  '<tr>'
                txt += '<th scope="col"> ' + cat.id + '</div>'
                txt += '<th scope="col"> ' + cat.categoria + '</div>'
                txt +=  '</tr>'

            })
            txt +=  '<tbody>'
            document.getElementById("divConteudo").innerHTML = txt
        }
    }
    req.open("GET", "http://localhost:8001/product", true)
    req.send()
}   