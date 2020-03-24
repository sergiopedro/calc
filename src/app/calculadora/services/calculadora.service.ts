import { Injectable } from '@angular/core';
import { compileNgModuleFromRender2 } from '@angular/compiler/src/render3/r3_module_compiler';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  /* 
  Defines the constants used to identify the operations.
  */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }


calcular(num1: number, num2: number, operacao: string): number {
  let result: number; //show the operation result.

  switch(operacao) {
    case CalculadoraService.SOMA:
      result = num1 + num2;
    break;
    case CalculadoraService.SUBTRACAO:
      result = num1 - num2;
    break;
    case CalculadoraService.DIVISAO:
      result = num1 / num2;
    break;
    case CalculadoraService.MULTIPLICACAO:
      result = num1 * num2; 
    break;
    default:
      result = 0;
  }
 
  return result;
 }
}