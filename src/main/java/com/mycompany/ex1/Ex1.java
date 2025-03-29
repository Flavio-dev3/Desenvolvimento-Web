/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.ex1;

import java.util.Scanner;

/**
 *
 * @author CEDUP 05
 */
public class Ex1 {

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        /*int n1 = teclado.nextInt();
        int n2 = teclado.nextInt();
        int soma = n1 + n2;
        System.out.format("A soma dos números %d + %d : %d",n1,n2,soma);*/
        /*float n1f = teclado.nextFloat();
        float n2f = teclado.nextFloat();
        float divisaof = n1f / n2f;
        System.out.printf("A divisão de %.2f / %.2f = %.2f",n1f,n2f,divisaof);*/
        /*int n1 = teclado.nextInt();
        int n2 = teclado.nextInt();
        int mult = n1 * n2;
        System.out.printf("A multiplicação de %d x %d = %d",n1,n2,mult);*/
        System.out.print("Digite qual número da tabuada você deseja ver\n: ");
        int numero = teclado.nextInt();
        for(int i=1;i<=10;i++){
            int resultado = i * numero;
            System.out.format("%d x %d = %d\n",numero,i,resultado);
        
        }
        
    }
}
