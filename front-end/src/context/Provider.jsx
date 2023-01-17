import { useState } from 'react';
import context from './index';

export default function Provider({ children }) {
  //atributos
  const [inteligencia, setInteligencia] = useState(1);
  const [raciocinio, setRaciocinio] = useState(1);
  const [perseveranca, setPerseveranca] = useState(1);
  const [forca, setForca] = useState(1);
  const [destreza, setDestreza] = useState(1);
  const [vigor, setVigor] = useState(1);
  const [presenca, setPresenca] = useState(1);
  const [manipulacao, setManipulacao] = useState(1);
  const [autocontrole, setAutocontrole] = useState(1);

  //habilidades
  const [ciencias, setCiencias] = useState({ especializacao: '', valor: 0});
  const [erudicao, setErudicao] = useState({ especializacao: '', valor: 0});
  const [informatica, setInformatica] = useState({ especializacao: '', valor: 0});
  const [investigacao, setInvestigacao] = useState({ especializacao: '', valor: 0});
  const [medicina, setMedicina] = useState({ especializacao: '', valor: 0});
  const [ocultismo, setOcultismo] = useState({ especializacao: '', valor: 0});
  const [oficios, setOficios] = useState({ especializacao: '', valor: 0});
  const [politica, setPolitica] = useState({ especializacao: '', valor: 0});
  const [armamento, setArmamento] = useState({ especializacao: '', valor: 0});
  const [armasDeFogo, setArmasDeFogo] = useState({ especializacao: '', valor: 0});
  const [briga, setBriga] = useState({ especializacao: '', valor: 0});
  const [conducao, setConducao] = useState({ especializacao: '', valor: 0});
  const [dissimulacao, setDissimulacao] = useState({ especializacao: '', valor: 0});
  const [esportes, setEsportes] = useState({ especializacao: '', valor: 0});
  const [furto, setFurto] = useState({ especializacao: '', valor: 0});
  const [sobrevivencia, setSobrevivencia] = useState({ especializacao: '', valor: 0});
  const [astucia, setAstucia] = useState({ especializacao: '', valor: 0});
  const [empatia, setEmpatia] = useState({ especializacao: '', valor: 0});
  const [expressao, setExpressao] = useState({ especializacao: '', valor: 0});
  const [intimidacao, setIntimidacao] = useState({ especializacao: '', valor: 0});
  const [manha, setManha] = useState({ especializacao: '', valor: 0});
  const [persuacao, setPersuacao] = useState({ especializacao: '', valor: 0});
  const [socializacao, setSocializacao] = useState({ especializacao: '', valor: 0});
  const [tratoCAnimais, setTratoCAnimais] = useState({ especializacao: '', valor: 0});
 
  //renome
  const [gloria, setGloria] = useState(0);
  const [honra, setHonra] = useState(0);
  const [pureza, setPureza] = useState(0);
  const [sabedoria, setSabedoria] = useState(0);
  const [sagacidade, setSagacidade] = useState(0);

  //Outras Características
  const [vantagens, setVantagens] = useState([{ nome: '', valor: 0 }]);
  const [vitalidade, setForcaDeVitalidade] = useState([{ total: 0, utilizado: 0 }]);
  const [forcaDeVontade, setForcaDeVontade] = useState([{ total: 0, utilizado: 0 }]);
  const [essencia, setEssencia] = useState(0);
  const [instintoPrimitivo, setInstintoPrimitivo] = useState(0);
  const [harmonia, setHarmonia] = useState(0);

  //data
  const [desvantagens, setDesvantagens] = useState('');
  const [ataque, setAtaque] = useState('');
  const [equipamentos, setEquipamentos] = useState('');
  const [experiencia, setExperiencia] = useState(0);

  const alterInteligencia = (intelig) => setInteligencia(intelig);
  const alterRaciocinio = (rac) => {setRaciocinio(rac)};
  const alterPerseveranca = (pers) => setPerseveranca(pers);
  const alterForca = (forca) => { setForca(forca) };
  const alterDestreza = (dex) => setDestreza(dex);
  const alterVigor = (vig) => setVigor(vig);
  const alterPresenca = (pres) => setPresenca(pres);
  const alterManipulacao = (man) => setManipulacao(man);
  const alterAutocontrole = (aut) => setAutocontrole(aut);

  const alterCiencias = (cie) => setCiencias(cie);
  const alterErudicao = (erud) => setErudicao(erud);
  const alterInformatica = (inf) => setInformatica(inf);
  const alterInvestigacao = (inv) => setInvestigacao(inv);
  const alterMedicina = (med) => setMedicina(med);
  const alterOcultismo = (ocu) => setOcultismo(ocu);
  const alterOficios = (of) => setOficios(of);
  const alterPolitica = (pol) => setPolitica(pol);
  const alterArmamento = (arm) => setArmamento(arm);
  const alterArmasDeFogo = (arm) => setArmasDeFogo(arm);
  const alterBriga = (bri) => setBriga(bri);
  const alterConducao = (cond) => setConducao(cond);
  const alterDissimulacao = (diss) => setDissimulacao(diss);
  const alterEsportes = (esp) => setEsportes(esp);
  const alterFurto = (fur) => setFurto(fur);
  const alterSobrevivencia = (sob) => setSobrevivencia(sob);
  const alterAstucia = (ast) => setAstucia(ast);
  const alterEmpatia = (emp) => setEmpatia(emp);
  const alterExpressao = (exp) => setExpressao(exp);
  const alterIntimidacao = (intim) => setIntimidacao(intim);
  const alterManha = (man) => setManha(man);
  const alterPersuacao = (pers) => setPersuacao(pers);
  const alterSocializacao = (soc) => setSocializacao(soc);
  const alterTratoCAnimais = (trat) => setTratoCAnimais(trat);

  const alterGloria = (glo) => setGloria(glo);
  const alterHonra = (hon) => setHonra(hon);
  const alterPureza = (pur) => setPureza(pur);
  const alterSabedoria = (sab) => setSabedoria(sab);
  const alterSagacidade = (sag) => setSagacidade(sag);

  const alterVantagens = (van) => setVantagens(van);
  const alterVitalidade = (vit) => setForcaDeVitalidade(vit);
  const alterForcaDeVontade = (fdv) => setForcaDeVontade(fdv);
  const alterEssencia = (ess) => setEssencia(ess);
  const alterInstintoPrimitivo = (inst) => setInstintoPrimitivo(inst);
  const alterHarmonia = (harm) => setHarmonia(harm);

  const alterDesvantagens = (desv) => setDesvantagens(desv);
  const alterAtaque = (atk) => setAtaque(atk);
  const alterEquipamentos = (equip) => setEquipamentos(equip);
  const alterExperiencia = (exp) => setExperiencia(exp);

  const exports = { 
    inteligencia,
    raciocinio,
    perseveranca,
    forca,
    destreza,
    vigor,
    presenca,
    manipulacao,
    autocontrole,  
    
    ciencias,
    erudicao,
    informatica,
    investigacao,
    medicina,
    ocultismo,
    oficios,
    politica,
    armamento,
    armasDeFogo,
    briga,
    conducao,
    dissimulacao,
    esportes,
    furto,
    sobrevivencia,
    astucia,
    empatia,
    expressao,
    intimidacao,
    manha,
    persuacao,
    socializacao,
    tratoCAnimais,
   
    gloria,
    honra,
    pureza,
    sabedoria,
    sagacidade,
  
    vantagens,
    vitalidade,
    forcaDeVontade,
    essencia,
    instintoPrimitivo,
    harmonia,
  
    desvantagens,
    ataque,
    equipamentos,
    experiencia,
  
    alterInteligencia,
    alterRaciocinio,
    alterPerseveranca,
    alterForca,
    alterDestreza,
    alterVigor,
    alterPresenca,
    alterManipulacao,
    alterAutocontrole,
  
    alterCiencias,
    alterErudicao,
    alterInformatica,
    alterInvestigacao,
    alterMedicina,
    alterOcultismo,
    alterOficios,
    alterPolitica,
    alterArmamento,
    alterArmasDeFogo,
    alterBriga,
    alterConducao,
    alterDissimulacao,
    alterEsportes,
    alterFurto,
    alterSobrevivencia,
    alterAstucia,
    alterEmpatia,
    alterExpressao,
    alterIntimidacao,
    alterManha,
    alterPersuacao,
    alterSocializacao,
    alterTratoCAnimais,
  
    alterGloria,
    alterHonra,
    alterPureza,
    alterSabedoria,
    alterSagacidade,
  
    alterVantagens,
    alterVitalidade,
    alterForcaDeVontade,
    alterEssencia,
    alterInstintoPrimitivo,
    alterHarmonia,
  
    alterDesvantagens,
    alterAtaque,
    alterEquipamentos,
    alterExperiencia,
  };

  return (
    <context.Provider value={{ exports }}>
      {children}
    </context.Provider>
  );
}