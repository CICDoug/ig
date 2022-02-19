import { DropdownMenu } from './DropdownMenu'
import { Logo } from './Logo/Logo'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Logo />


        <DropdownMenu title='HOME' baseHref='/' shouldMatchExactHref={true} />
        <DropdownMenu title='QUEM SOMOS' baseHref='/quem-somos' options={[
          { title: 'HISTÓRIA', href: '/historia' },
          { title: 'SEDE PORTO ALEGRE', href: '/sede-porto-alegre' },
          { title: 'SEDE PINHAL', href: '/sede-pinhal' },
          { title: 'SEDE SANTA MARIA', href: '/sede-santa-maria' },
          { title: 'GESTÃO', href: '/gestao' },
          { title: 'ESTATUTO', href: '/estatuto' },
          { title: 'GALERIA DE FOTOS', href: '/galeria' },
          { title: 'TUOR 360º', href: '/tuor' },
          { title: 'NOTÍCIAS', href: '/noticias' },
        ]} />
        <DropdownMenu title='SERVIÇOS' baseHref='/servicos'
          options=
          {[
            { title: 'LOCAÇÃO', href: '/locacao' },
            { title: 'associe-se', href: '/associe-se' },
            { title: 'clube de vantagens', href: '/clube-de-vantagen' },
          ]}
        />

        <DropdownMenu title='ESPORTES' baseHref='/esportes'
          options={[
            { title: 'atividades esportivas', href: '/atividades-esportivas' }
          ]}
        />


        <DropdownMenu title='SOCIOCULTURAL' baseHref='/sociocultural' />
        <DropdownMenu title='CONTATO' baseHref='/contato' />
        <DropdownMenu title='ÁREA DO ASSOCIADO' baseHref='/area-do-associado' />
      </div>
    </header>
  )
}
