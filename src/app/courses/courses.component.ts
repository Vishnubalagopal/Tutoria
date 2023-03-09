import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = [
    { h1:'Angular',title: 'Learn Angular',image1: 'https://cdn.windowsreport.com/wp-content/uploads/2020/06/angular-logo-2.png' , image: 'https://cyteksite.files.wordpress.com/2017/01/angular-background-fhd.png?w=1024' },
    { h1:'Swift',title: 'Build an IOS Application',image1:'https://cdn.iconscout.com/icon/free/png-512/swift-2038869-1720082.png', image: 'https://appleosophy.com/wp-content/uploads/2019/06/20152F122F032F2a2Fswiftlogohe.d2c70.jpg2F950x534__filters3Aquality289029.jpg' },
    { h1:'WordPress',title: 'Build a WordPress website',image1:'https://mk0wparena2dlb3il88l.kinstacdn.com/wp-content/uploads/2016/08/wordpress-iphone.png', image: 'https://wallpapercave.com/wp/wp6905719.jpg' },
    { h1:'React',title: 'Become a react native',image1:'https://www.computerhope.com/jargon/r/react-native.jpg', image: 'https://wallpapercave.com/wp/wp6953049.jpg' }

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
