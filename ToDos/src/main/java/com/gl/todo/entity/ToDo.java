package com.gl.todo.entity;

import java.util.Date;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name="todo")
@AllArgsConstructor
@NoArgsConstructor
public class ToDo {
@Id
@GeneratedValue(strategy =GenerationType.IDENTITY)
int id;
String title;
String description;
boolean status;

}
