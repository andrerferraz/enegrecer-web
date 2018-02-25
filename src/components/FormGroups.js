import React from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask';
import SelectField from 'material-ui/SelectField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import MenuItem from 'material-ui/MenuItem';
import { ESTADOS } from '../constants';


export function TelefoneFormGroup({ handleChange, ...props }) {
  return (
    <div>
      <label htmlFor={props.id}>Telefone</label>
      <InputMask
        {...props}
        type="text"
        name={props.id}
        id={props.id}
        onChange={e => handleChange(e.target.value, 'telefone')}
        value={props.value}
        mask="(99) 99999-9999"
        maskChar=" "
      />
    </div>
  )
}

export function RacaFormGroup({ handleChange, ...rest }) {
  return (
    <SelectField
      {...rest}
      hintText="Escolha uma opção"
      floatingLabelText={'Cor ou Raca'}
      floatingLabelFixed
      fullWidth
      onChange={(_, $_, v) => handleChange(v, 'raca')}
    >
      <MenuItem value={'preta'} primaryText="Preta" />
      <MenuItem value={'parda'} primaryText="Parda" />
    </SelectField>
  )
}

export function RadioGrupoBotoes(props) {
  return (
    <RadioButtonGroup
      name={props.id}
      defaultSelected={props.valorPadrao}
    >
      { props.botoes.map(
        botaoRadio =>
          (<RadioButton
            className="inch-button"
            id={botaoRadio.id}
            key={botaoRadio.valor}
            value={botaoRadio.valor}
            label={botaoRadio.label}
          />)
      )
      }
    </RadioButtonGroup>
  )
}

RadioGrupoBotoes.propTypes = {
  id: PropTypes.string,
  valorPadrao: PropTypes.string,
  botoes: PropTypes.arrayOf(PropTypes.object)
};

RadioGrupoBotoes.defaultProps = {
  id: '',
  valorPadrao: '',
  botoes: []
};

export function CheckBox(props) {
  return (
   <p>
     <input type="checkbox" id={props.id} />
     <label for={props.id}>{props.label}</label>
   </p>
  );
}

CheckBox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string
};

CheckBox.defaultProps = {
  id: '',
  label: '',
  name: ''
}

export function EstadoFormGroup({ handleChange, ...rest }) {
  return (
    <div className="input-field col s12">
      <SelectField
        {...rest}
        hintText="Escolha uma opção"
        floatingLabelText="Estado"
        floatingLabelFixed
        fullWidth
        onChange={(_, __, v) => handleChange(v, 'estado')}
      >
        {
          ESTADOS.map(
            val => <MenuItem key={val} value={val} primaryText={val} />
          )
        }
      </SelectField>
    </div>  
  )
}

 

export function Combobox(props) {
  return (
    <div className={props.divClasse}>
    <select id={props.id}>
      <option value="" >{props.valorPadrao}</option>
      {
        props.itens.map(
          val => <option key={val} value={val}> {val} </option>
        )
      }
    </select>
    <label for={props.id}>{props.label}</label>
  </div>
  );
}

Combobox.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  maxLen: PropTypes.number,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  divClasse: PropTypes.string,
  inputClasse: PropTypes.string
};

export function CampoTexto(props) {
  return (
    <div className={props.divClasse}>
      <input  id={props.id} type={props.type} className={props.inputClasse} />
      <label className="active" for={props.id}>{props.label}</label>
    </div>
  );
}

CampoTexto.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  maxLen: PropTypes.number,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  divClasse: PropTypes.string,
  inputClasse: PropTypes.string

};

CampoTexto.defaultProps = {
  id: '',
  type: '',
  maxLen: '',
  placeholder: '',
  label: '',
  onChange: () => {},
  divClasse: '',
  inputClasse: ''
};

const formGroupPropTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

EstadoFormGroup.propTypes = { ...formGroupPropTypes };

TelefoneFormGroup.propTypes = { ...formGroupPropTypes };

RacaFormGroup.propTypes = { ...formGroupPropTypes };
