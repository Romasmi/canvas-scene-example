# CMAKE generated file: DO NOT EDIT!
# Generated by "MinGW Makefiles" Generator, CMake Version 3.9

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

SHELL = cmd.exe

# The CMake executable.
CMAKE_COMMAND = C:\study\CppDistro\CppDistro\cmake\bin\cmake.exe

# The command to remove a file.
RM = C:\study\CppDistro\CppDistro\cmake\bin\cmake.exe -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = C:\study\project_work

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = C:\study\project_work

# Include any dependencies generated for this target.
include sfml_3/04/CMakeFiles/04.dir/depend.make

# Include the progress variables for this target.
include sfml_3/04/CMakeFiles/04.dir/progress.make

# Include the compile flags for this target's objects.
include sfml_3/04/CMakeFiles/04.dir/flags.make

sfml_3/04/CMakeFiles/04.dir/main.cpp.obj: sfml_3/04/CMakeFiles/04.dir/flags.make
sfml_3/04/CMakeFiles/04.dir/main.cpp.obj: sfml_3/04/CMakeFiles/04.dir/includes_CXX.rsp
sfml_3/04/CMakeFiles/04.dir/main.cpp.obj: sfml_3/04/main.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=C:\study\project_work\CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object sfml_3/04/CMakeFiles/04.dir/main.cpp.obj"
	cd /d C:\study\project_work\sfml_3\04 && C:\study\CppDistro\CppDistro\MinGW\bin\g++.exe  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles\04.dir\main.cpp.obj -c C:\study\project_work\sfml_3\04\main.cpp

sfml_3/04/CMakeFiles/04.dir/main.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/04.dir/main.cpp.i"
	cd /d C:\study\project_work\sfml_3\04 && C:\study\CppDistro\CppDistro\MinGW\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E C:\study\project_work\sfml_3\04\main.cpp > CMakeFiles\04.dir\main.cpp.i

sfml_3/04/CMakeFiles/04.dir/main.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/04.dir/main.cpp.s"
	cd /d C:\study\project_work\sfml_3\04 && C:\study\CppDistro\CppDistro\MinGW\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S C:\study\project_work\sfml_3\04\main.cpp -o CMakeFiles\04.dir\main.cpp.s

sfml_3/04/CMakeFiles/04.dir/main.cpp.obj.requires:

.PHONY : sfml_3/04/CMakeFiles/04.dir/main.cpp.obj.requires

sfml_3/04/CMakeFiles/04.dir/main.cpp.obj.provides: sfml_3/04/CMakeFiles/04.dir/main.cpp.obj.requires
	$(MAKE) -f sfml_3\04\CMakeFiles\04.dir\build.make sfml_3/04/CMakeFiles/04.dir/main.cpp.obj.provides.build
.PHONY : sfml_3/04/CMakeFiles/04.dir/main.cpp.obj.provides

sfml_3/04/CMakeFiles/04.dir/main.cpp.obj.provides.build: sfml_3/04/CMakeFiles/04.dir/main.cpp.obj


# Object files for target 04
04_OBJECTS = \
"CMakeFiles/04.dir/main.cpp.obj"

# External object files for target 04
04_EXTERNAL_OBJECTS =

sfml_3/04/04.exe: sfml_3/04/CMakeFiles/04.dir/main.cpp.obj
sfml_3/04/04.exe: sfml_3/04/CMakeFiles/04.dir/build.make
sfml_3/04/04.exe: C:/study/CppDistro/CppDistro/MinGW/lib/libsfml-window-s-d.a
sfml_3/04/04.exe: C:/study/CppDistro/CppDistro/MinGW/lib/libsfml-graphics-s-d.a
sfml_3/04/04.exe: C:/study/CppDistro/CppDistro/MinGW/lib/libsfml-system-s-d.a
sfml_3/04/04.exe: C:/study/CppDistro/CppDistro/MinGW/lib/libfreetype.a
sfml_3/04/04.exe: C:/study/CppDistro/CppDistro/MinGW/lib/libjpeg.a
sfml_3/04/04.exe: sfml_3/04/CMakeFiles/04.dir/linklibs.rsp
sfml_3/04/04.exe: sfml_3/04/CMakeFiles/04.dir/objects1.rsp
sfml_3/04/04.exe: sfml_3/04/CMakeFiles/04.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=C:\study\project_work\CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable 04.exe"
	cd /d C:\study\project_work\sfml_3\04 && $(CMAKE_COMMAND) -E cmake_link_script CMakeFiles\04.dir\link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
sfml_3/04/CMakeFiles/04.dir/build: sfml_3/04/04.exe

.PHONY : sfml_3/04/CMakeFiles/04.dir/build

sfml_3/04/CMakeFiles/04.dir/requires: sfml_3/04/CMakeFiles/04.dir/main.cpp.obj.requires

.PHONY : sfml_3/04/CMakeFiles/04.dir/requires

sfml_3/04/CMakeFiles/04.dir/clean:
	cd /d C:\study\project_work\sfml_3\04 && $(CMAKE_COMMAND) -P CMakeFiles\04.dir\cmake_clean.cmake
.PHONY : sfml_3/04/CMakeFiles/04.dir/clean

sfml_3/04/CMakeFiles/04.dir/depend:
	$(CMAKE_COMMAND) -E cmake_depends "MinGW Makefiles" C:\study\project_work C:\study\project_work\sfml_3\04 C:\study\project_work C:\study\project_work\sfml_3\04 C:\study\project_work\sfml_3\04\CMakeFiles\04.dir\DependInfo.cmake --color=$(COLOR)
.PHONY : sfml_3/04/CMakeFiles/04.dir/depend

