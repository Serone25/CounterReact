import React from "react";
import clockImg from "../../img/clock.png";

    const styleSecond = {
        display:"flex",
        flexDirection:"row",
        textAlign:"center"
    }
    const clockStyle ={
        width:150,
        height:150,
        borderRadius: 15,
        backgroundColor:"grey"
    }
    const cardStyle = {
        width:100,
        height:150,
        borderRadius: 15,
        backgroundColor:"grey",
        fontSize:100,
        fontColor:"black"
    }

    const imgStyle = {
        width:150,
        height:150
    }

    const buttonStyleReanuda ={
        width:150,
        height:40,
        backgroundColor:"#4CAF50",
        fontSize:20,
        color:"white",
        marginTop:20,
        marginLeft:150
    }
    const buttonStyleParo ={
        width:150,
        height:40,
        backgroundColor:"#f44336",
        fontSize:20,
        color:"white",
        marginTop:20,
        marginLeft:20
    }
    const buttonStyleReinicio ={
        width:150,
        height:40,
        backgroundColor:"#008CBA",
        fontSize:20,
        color:"white",
        marginTop:20,
        marginLeft:20
    }
    

    const SecondsCounter = ({seconds,paro,reanuda,reiniciar}) =>{

        let unit = seconds;         //recibo la variable de index.js y la igualo a units, que es la que voy a usar en el contador.
        let ten = 0;                //decenas
        let hundred = 0;            //centenas
        let thousand = 0;           //millares
        let tenThousand = 0;
        let hundredThousand = 0;

        if(seconds > 9){
            ten = Math.trunc(seconds/10);       //Math.trunc coge los numeros a la izquierda de un punto decimal. (10 seconds/10 = 1.0)-pasa el valor a decenas
            unit = seconds % 10;                //reseteo unidades a 0 (El resto de 10/10 es 0)
            if(ten > 9){
                hundred = Math.trunc(ten/10);
                ten = ten % 10;
                if(hundred > 9){
                    thousand = Math.trunc(hundred/10);
                    hundred = hundred %10;
                    if(thousand > 9){
                        tenThousand = Math.trunc(thousand/10);
                        thousand = thousand%10;
                        if(tenThousand >9){
                            hundredThousand = Math.trunc(tenThousand/10);
                            tenThousand = tenThousand %10;
                            if(hundredThousand > 9){
                                alert("Te has pasado el juego");
                            }
                        }
                    }
                }
            }
        }

        return(
            <div>
                <div className="seconds" style={styleSecond}>
                    <div className="clock" style={clockStyle}><img src={clockImg} style={imgStyle}/></div>
                    <div className="card" style={cardStyle}>{hundredThousand}</div>
                    <div className="card" style={cardStyle}>{tenThousand}</div>
                    <div className="card" style={cardStyle}>{thousand}</div>
                    <div className="card" style={cardStyle}>{hundred}</div>
                    <div className="card" style={cardStyle}>{ten}</div>
                    <div className="card" style={cardStyle}>{unit}</div>
                </div>
                <div>
                    <button onClick={reanuda} style={buttonStyleReanuda}>Play</button>     
                    <button onClick={paro} style={buttonStyleParo}>Stop</button>
                    <button onClick={reiniciar} style={buttonStyleReinicio}>Reinicio</button>
                </div>
            </div>
        )  
    }

export default SecondsCounter;