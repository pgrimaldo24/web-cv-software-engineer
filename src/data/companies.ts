import bcpLogo from '../assets/logos/bcp.png'
import casinoAtlanticCityLogo from '../assets/logos/casinoatlanticcity.svg'
import evolLogo from '../assets/logos/evol.svg'
import ferreyrosLogo from '../assets/logos/ferreyros.png'
import grupoGloriaLogo from '../assets/logos/grupogloria.svg'
import nttDataLogo from '../assets/logos/nttdata.png'
import oechsleLogo from '../assets/logos/oechsle.svg'
import promartLogo from '../assets/logos/promart.png'
import sigcomtLogo from '../assets/logos/sigcomt.png'
import topStrategicLogo from '../assets/logos/topstrategic.png'
import type { Company } from '../types'

export const companies: Company[] = [
  {
    id: 'topstrategic',
    name: 'TOP Strategic',
    logo: topStrategicLogo,
  },
  {
    id: 'evol',
    name: 'EVOL',
    logo: evolLogo,
  },
  {
    id: 'grupo-gloria',
    name: 'Grupo Gloria',
    logo: grupoGloriaLogo,
  },
  {
    id: 'oechsle',
    name: 'Oechsle',
    logo: oechsleLogo,
  },
  {
    id: 'digitalia-tec',
    name: 'Digitalia Tec',
    textOnly: true,
  },
  {
    id: 'casino-atlantic-city',
    name: 'Casino Atlantic City & Sport',
    logo: casinoAtlanticCityLogo,
  },
  {
    id: 'ntt-data',
    name: 'NTT Data',
    logo: nttDataLogo,
  },
  {
    id: 'ferreyros',
    name: 'Ferreyros',
    logo: ferreyrosLogo,
  },
  {
    id: 'sigcomt',
    name: 'Sigcomt',
    logo: sigcomtLogo,
  },
  {
    id: 'bcp',
    name: 'BCP',
    logo: bcpLogo,
  },
  {
    id: 'promart',
    name: 'PROMART',
    logo: promartLogo,
    logoHeightClassName: 'h-24',
  },
]
