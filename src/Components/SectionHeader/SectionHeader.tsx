import './SectionHeader.css'

type SectionHeaderProps = {
  id: string
  content: string
}

const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <>
      <div className='header-wrapper'>
        <h2 id={props.id} className='section-header'>
          {props.content}
        </h2>
      </div>
    </>
  )
}

export default SectionHeader
