import { Component } from '@angular/core';
import {BlogPostCard} from "./blog-post-card";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: BlogPostCard[] = [
    {
      mainImageUrl: 'https://source.unsplash.com/odxB5oIG_iA/400x250',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: 'https://source.unsplash.com/e-S-Pe2EmrE/400x250',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: 'https://source.unsplash.com/EAvS-4KnGrk/400x250',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: 'https://source.unsplash.com/RP6Ba_6U154/400x250',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: 'https://source.unsplash.com/I2YSmEUAgDY/400x250',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: 'https://source.unsplash.com/hpTH5b6mo2s/400x250',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: 'https://source.unsplash.com/2TQwrtZnl08/400x250',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: 'https://source.unsplash.com/cGwfkwHmt98/400x250',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
  ];
  courses = [
    {id:1, name:'JavaScript for beginners',author:"Felix", duration:54 ,type:'Free',price :0.0,rating:5.5,image:'assets/Javascript.png' ,description:'in this course you will learn about the fundamentals of javascript'},
    {id:1, name:'Html (intermediate)',author:"James Helsing", duration: 54,type:'Premium',price :0.0,rating:5.5,image:'assets/Html5.jpeg' ,description:'in this course you will learn  about Html elements and design a webpage'},
    {id:1, name:'Css (Design Architecture)',author:"Ken Maina", duration: 48,type:'Free',price :0.0,rating:5.5,image:'assets/Css.jpeg' ,description:'level up your design skills by undertaking this Css'},
    {id:1, name:'Angular for beginners',author:"Felix", duration: 48,type:'Premium',price :0.0,rating:5.5,image:'assets/Angular.jpeg' ,description:'Challenge  yourself int web development by building customised websites '},
    {id:1, name:'BlockChain',author:"Felix", duration: 48,type:'Premium',price :0.0,rating:5.5,image:'assets/blockchain.jpeg' ,description:'Gain the know how of block chain in app development'},
    {id:1, name:'Artificial Intelligence for beginners',author:"Felix", duration: 48,type:'Free',price :0.0,rating:5.5,image:'assets/AI.jpeg' ,description:'int this course you will learn about the fundamentals of Artificial intelligence'},
    {id:1, name:'React(Advanced)',author:"Felix", duration: 48,type:'Premium',price :0.0,rating:5.5,image:'assets/React.jpeg' ,description:'int this course you will learn about the fundamentals of React'},
    {id:1, name:'Android',author:"Felix", duration: 48,type:'Premium',price :0.0,rating:5.5,image:'assets/Android.jpeg' ,description:'learn OOP concepts using kotlin '},
    {id:1, name:'Kotlin',author:"Felix", duration: 48,type:'Free',price :0.0,rating:5.5,image:'assets/Kotlin.jpeg' ,description:'learn OOP concepts using kotlin '},
    {id:1, name:'Python (Advanced)',author:"Felix", duration: 48,type:'Premium',price :0.0,rating:5.5,image:'assets/Python.jpeg' ,description:'gain skills in Api development using python and django'},
    {id:1, name:'Ui/Ux for beginners',author:"Felix", duration: 48,type:'Premium',price :0.0,rating:5.5,image:'assets/UiUx.jpeg' ,description:'gain technical skills on of UI/UX'},
  ]
  getTotalCourses(){
    return this.courses.length
  }
  getTotalFreeCourses(){
    return this.courses.filter(courses => courses.type === 'free').length
  }
  getTotalPremiumCourses(){
    return this.courses.filter(courses => courses.type === 'premium').length
  }
  courseCountRadioButton :string = 'All'
  onFilterRadioButtonChanged(data :string){
    this.courseCountRadioButton = data
    console.log(this.courseCountRadioButton)
  }
}
