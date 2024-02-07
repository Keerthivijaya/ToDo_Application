package com.gl.todo.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gl.todo.entity.ToDo;
import com.gl.todo.exception.ResourceNotFoundException;
import com.gl.todo.repository.ToDoRepository;
import com.gl.todo.service.ToDoService;

@Service
public class ToDoServiceImpl implements ToDoService {
@Autowired
ToDoRepository repository;

@Override
public ToDo createToDo(ToDo todo) {
return	repository.save(todo);
	
}
@Override
public ToDo getToDoById(int id) {
	ToDo todo=repository.findById(id).orElseThrow(()-> new ResourceNotFoundException("ToDo with id"+id+"doesn't exist"));
	return todo;
}
@Override
public ToDo updateToDoById(int id,ToDo todo) {
	ToDo d=null;
	d=repository.findById(id).orElseThrow(()-> new ResourceNotFoundException("ToDo with id"+id+"doesn't exist"));
d.setTitle(todo.getTitle());	
d.setDescription(todo.getDescription());	
d.setStatus(todo.isStatus());
return repository.save(d);
}
@Override
public List<ToDo> getAllToDo(){
	List<ToDo> list=repository.findAll();
	return list;
}
@Override
public void deleteToDoById(int id) {
	ToDo todo=repository.findById(id).orElseThrow(()-> new ResourceNotFoundException("ToDo with id"+id+"doesn't exist"));
	repository.deleteById(id);
}

public ToDo statusComplete(int id) {
	ToDo updateStatus = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Id Not Found"));
	updateStatus.setStatus(true);
	return repository.save(updateStatus);
}

public  ToDo statusIncomplete(int id) {
	ToDo updateStatus = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Id Not Found "));
	updateStatus.setStatus(false);
	return repository.save(updateStatus);
}

}

