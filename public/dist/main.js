!function(a,b){"use strict";var c=30,d=function(){this.pageTitle=b("title").text(),this.searchInput=b(".search"),this.loadMoreButton=b(".button.load-more"),this.bindInput(),this.bindLoadMore(),this.createList(),this.parseQueryString()};d.prototype.createList=function(){var a=this;a.list=new List("all",{valueNames:["name","desc","stars","forks","author"],page:c})},d.prototype.loadMore=function(){var a=this,b=a.list.page;a.list.show(1,b+c)},d.prototype.bindInput=function(){var a=this;history.replaceState&&a.searchInput.on("input",function(b){var c,d=b.target.value;""!==d?(c="?q="+d,a.loadMoreButton.hide()):(c=".",a.loadMoreButton.show()),history.replaceState(a.pageTitle,a.pageTitle,c)})},d.prototype.bindLoadMore=function(){var a=this;a.loadMoreButton.on("click",function(b){b.preventDefault(),a.hasNextPage()||a.loadMoreButton.hide(),a.loadMore()})},d.prototype.hasNextPage=function(){var a=this;return a.list.page<=a.list.items.length-c},d.prototype.parseQueryString=function(){var b=this,c=a.location.search.substring(1);if(""!==c){var d=b.generateQueryParams(c.split("&"));b.loadMoreButton.hide(),b.searchInput.val(d.q),b.list.search(d.q)}},d.prototype.generateQueryParams=function(a){var b={};for(var c in a){var d=a[c].split("=");if(d.length>1){var e=decodeURIComponent(d[0].replace(/\+/g," ")),f=decodeURIComponent(d[1].replace(/\+/g," "));b[e]=f}}return b},window.Search=d}(window,jQuery),function(a,b){"use strict";b(function(){function a(a){return a?a.replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}b.ajax({url:"http://search.customelements.io/?perPage=1500",dataType:"json",jsonp:"callback",success:function(c){var d="";c.results.forEach(function(b){d+='<tr><td class="name"><a target="_blank" href="https://github.com/'+b.owner+"/"+b.name+'">'+b.name+'</a></td><td class="desc">'+a(b.description)+'</td><td class="stars">'+b.stargazers_count+'</td><td class="forks">'+b.forks_count+'</td><td class="author"><a target="_blank" href="https://github.com/'+b.owner+'/">'+b.owner+"</a></td></tr>"}),b(".list").html(d),b(".search-query").attr("placeholder","Search in "+c.total+" repos..."),new Search}})})}(window,jQuery);