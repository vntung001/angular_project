import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { PlayerComponent } from './components/player/player.component';

const routes: Routes = [
  {path: '', component: PlayerComponent},
  {path: 'player', component: PlayerComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'quiz', component: QuizComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
