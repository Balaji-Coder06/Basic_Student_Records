#include <stdio.h>
#include <string.h>

#define MAX_STUDENTS 100

struct Student {
    int roll;
    char name[50];
    float marks;
};

struct Student s[MAX_STUDENTS];
int n = 0;

// Add a new student
void add(int roll, const char *name, float marks) {
    if (n >= MAX_STUDENTS) return;
    s[n].roll = roll;
    strncpy(s[n].name, name, 49);
    s[n].marks = marks;
    n++;
}

// Display all students (for Web output)
void display() {
    for (int i = 0; i < n; i++) {
        printf("%d, %s, %.2f\\n", s[i].roll, s[i].name, s[i].marks);
    }
}

// Search for a student by roll number
struct Student *search(int roll) {
    for (int i = 0; i < n; i++) {
        if (s[i].roll == roll) {
            return &s[i];
        }
    }
    return NULL;
}

// Update a student's marks
void update(int roll, float marks) {
    for (int i = 0; i < n; i++) {
        if (s[i].roll == roll) {
            s[i].marks = marks;
            return;
        }
    }
}

// Delete a student by roll number
void delete(int roll) {
    for (int i = 0; i < n; i++) {
        if (s[i].roll == roll) {
            for (int j = i; j < n - 1; j++) {
                s[j] = s[j + 1];
            }
            n--;
            return;
        }
    }
}

int main() {
    return 0;  // No interaction in main() – WebAssembly handles it
}
