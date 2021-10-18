new Vue({
    el:'#article_vue',
    data:{
        preg_1:'',
        pregunta1:false,
        pregunta2:false,
        pregunta3:false,
        pregunta0:false,
        resultados_block1:false,
        resultados_block2:false,
        resultados_block3:false,
        anios_prog:'',
        motv_prog:'',
        exp_prog:'',
        lng_prog:'',
        lngs_prog:[],
    },
    methods:{
        validar_preg1:function(){
            if(this.preg_1=="Si"){
                this.pregunta0=false
                this.pregunta1=!this.pregunta1
            }
            else if(this.preg_1=="No"){
                this.pregunta1=false
                this.pregunta2=false
                this.pregunta3=false
                this.resultados_block1=false
                this.resultados_block2=false
                this.resultados_block3=false
                this.pregunta0=!this.pregunta0
            }
        },     
        validaranios:function(){
            var a_p=parseInt(this.anios_prog)
            if(a_p==1){
                this.pregunta3=false
                this.pregunta2=!this.pregunta2
            }
            else if(a_p>=2){
                this.pregunta2=false
                this.pregunta3=!this.pregunta3
            }
        },
        agregar_Lng:function(){
            this.lngs_prog.push(this.lng_prog);
            this.lng_prog='';
        },
        resultados:function(){
            var a_p_r=parseInt(this.anios_prog)
            if(this.preg_1='Si' && a_p_r==1){
                this.resultados_block1=!this.resultados_block1
                this.resultados_block2=!this.resultados_block2
            }
            else if(this.preg_1='Si' && a_p_r>=2){
                this.resultados_block2=false
                this.resultados_block1=!this.resultados_block1
                this.resultados_block3=!this.resultados_block3
            }
        }
    }
});