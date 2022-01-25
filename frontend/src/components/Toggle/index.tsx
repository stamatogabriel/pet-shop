import { Container, CustomLabel } from './styles'

interface ToggleProps {
  selector?: boolean //TODO: voltar propriedade como obrigatório
  handleChange(): void
  toggleLabel?: string
  secondToggleLabel?: string
  small?: boolean
  color?: string
}

const Toggle: React.FC<ToggleProps> = ({
  selector,
  handleChange,
  toggleLabel,
  secondToggleLabel,
  small,
}) => {
  return (
    <Container small={small} color="#ff6600">
      <CustomLabel htmlFor="toggle" checked={!selector}>
        {toggleLabel}
      </CustomLabel>
      <label className="switch">
        <input type="checkbox" checked={selector} onChange={handleChange} id="toggle" />
        <span className="slider round" />
      </label>
      {secondToggleLabel && (
        <CustomLabel htmlFor="toggle" checked={selector}>
          {secondToggleLabel}
        </CustomLabel>
      )}
    </Container>
  )
}

export default Toggle
