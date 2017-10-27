window.addEventListener('load',function(){
    let dl=document.querySelector('dl');
    let ts=document.querySelector('.ts');
    let cb=document.querySelector('#celan');
    let info=[
        {name:'张振亚',tell:'15110804272',py:'zhangzhenya'},
        {name:'李小天',tell:'15110804273',py:'lixiaotian'},
        {name:'王武',tell:'15110804274',py:'wangwu'},
        {name:'赵乐',tell:'15110804275',py:'zhaole'},
        {name:'分佳佳',tell:'15110804276',py:'fengjiajia'},
        {name:'王华岁',tell:'15710804272',py:'wanghuasui'},
        {name:'张样',tell:'15118804272',py:'zhangyang'},
        {name:'李四',tell:'15112804272',py:'lisi'},
        {name:'罗贯中',tell:'15910804272',py:'luoguanzhong'},
        {name:'樊瑶瑶',tell:'13110804272',py:'fanyaoyao'},
        {name:'吕鉴',tell:'19110804272',py:'lvjian'}
    ];
    seach(info)//调用seach函数
    function seach(date){   //设置一个形参date用来接受info的值
        let obj={};//创建一个空的对象用来接受值
        dl.innerHTML='';//清空dl的内容
        cb.innerHTML='';
        date.forEach(elements=>{//遍历info
            let frist=elements.py.charAt(0).trim().toUpperCase();//找到首字母并且换成大写

            if(!obj[frist]){//如果他没有值就用空的数组代替
                obj[frist]=[];
            }
            obj[frist].push(elements);//把{}当作obj[frist]的属性值给放进去
        })
        let char=Object.keys(obj).sort();//将遍立出来的字母进行排序
        ts.innerHTML=char[0];
        char.forEach(elements=>{//遍立字母并且赋值给dt
            dl.innerHTML+=`<dt>${elements}</dt>`;
            cb.innerHTML+=`<li>${elements}</li>`;
        obj[elements].forEach(value=>{//将每个字母后面的属性值遍立出来并且赋值给dd所对应的参数
            dl.innerHTML+=`
                    <dd><a href="tel:${value.tell}">${value.name}</a></dd>
                    `
    })
    })
        let dt=document.querySelectorAll('dt');
        let dtarr=[];
        dt.forEach(elements=>{
            dtarr.push(elements.offsetTop);
        });
        let tsh=ts.offsetTop;
        window.addEventListener('scroll',function(){
            let chu=document.body.scrollTop;

            dtarr.forEach((elements,index)=>{
                if(chu+tsh>=elements){
                    ts.innerHTML=dt[index].innerText;
                }
            })

        })
    }
    let sx=document.querySelector('input');
    sx.addEventListener('keyup',function(){
        let txt=sx.value.trim();
        let date=info.filter(function(elements){
            return elements.py.includes(txt)||elements.name.includes(txt)||elements.tell.includes(txt);
        })
        seach(date);
    })

})