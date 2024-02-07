package com.gl.todo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.gl.todo.entity.ToDo;

public interface ToDoRepository  extends JpaRepository<ToDo, Integer> {

}
