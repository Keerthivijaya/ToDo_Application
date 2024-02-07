package com.gl.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gl.todo.entity.ToDo;
import com.gl.todo.serviceimpl.ToDoServiceImpl;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/todos")
public class ToDoController {
@Autowired
ToDoServiceImpl todoservice;
@PostMapping
ToDo createToDo(@RequestBody ToDo todo){
	//todoservice.createToDo(todo);
	//System.out.println(todo.getDescription());
	return todoservice.createToDo(todo);
	
}
@GetMapping("{id}")
ResponseEntity<ToDo> getToDoById(@PathVariable("id") int id){
	ToDo t=todoservice.getToDoById(id);
	return new ResponseEntity(t,HttpStatus.OK);
}
@PutMapping("{id}")
ResponseEntity<ToDo> updateToDoById(@PathVariable("id") int id,@RequestBody ToDo todo){
	ToDo t=todoservice.updateToDoById(id,todo);
	return new ResponseEntity(t,HttpStatus.OK);
}
@DeleteMapping("{id}")
ResponseEntity<ToDo> deleteToDoById(@PathVariable("id") int id){
	todoservice.deleteToDoById(id);
	return new ResponseEntity("deleted successfully",HttpStatus.OK);
}
@GetMapping
ResponseEntity<List<ToDo>> getAllTodos(){
	List<ToDo> list=todoservice.getAllToDo();
	 return new ResponseEntity(list,HttpStatus.OK);
}
@PutMapping("/completeTodo/{id}")
ResponseEntity<ToDo> statusComplete(@PathVariable("id") int id){
	ToDo t = todoservice.statusComplete(id);
	return new ResponseEntity<ToDo>(t, HttpStatus.OK);
}

@PutMapping("incompleteTodo/{id}")
ResponseEntity<ToDo> statusIncomplete(@PathVariable("id") int id){
	ToDo t = todoservice.statusIncomplete(id);
	return new ResponseEntity<ToDo>(t, HttpStatus.OK);
}

}
