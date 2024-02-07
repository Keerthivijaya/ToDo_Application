package com.gl.todo.service;

import java.util.List;

import com.gl.todo.entity.ToDo;

public interface ToDoService {

	public ToDo createToDo(ToDo todo);

	ToDo getToDoById(int id);

	ToDo updateToDoById(int id, ToDo todo);

	List<ToDo> getAllToDo();

	void deleteToDoById(int id);



	

	
	

}
