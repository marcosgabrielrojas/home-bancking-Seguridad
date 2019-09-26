/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package web;

import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

        

@WebServlet(name = "Web", urlPatterns = {"/Web"})
public class Web extends HttpServlet {

    Gson convertirJson = new Gson();
ArrayList<datos> miListado = new ArrayList();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Usuario: "+ req.getParameter("user"));
        System.out.println("Clave: "+ req.getParameter("pass"));
        
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
       System.out.println( "Nuevo Saldo ");
       String saldo = req.getReader().readLine();
      
       datos guardados =convertirJson.fromJson(saldo,datos.class);
        System.out.println("Nuevo Saldo: "+ guardados.getSaldo());
        miListado.add(guardados);
    }
    

    
    
}
