package com.zfans.shenlan.service.edu.controller.api;

import com.zfans.shenlan.common.base.result.R;
import com.zfans.shenlan.service.base.dto.CourseDto;
import com.zfans.shenlan.service.edu.entity.Course;
import com.zfans.shenlan.service.edu.entity.vo.ChapterVo;
import com.zfans.shenlan.service.edu.entity.vo.WebCourseQueryVo;
import com.zfans.shenlan.service.edu.entity.vo.WebCourseVo;
import com.zfans.shenlan.service.edu.service.ChapterService;
import com.zfans.shenlan.service.edu.service.CourseService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @Author Zfans
 * @DateTime 2021/3/14 11:51
 */
// @CrossOrigin
@Api(tags = "课程")
@RestController
@RequestMapping("/api/edu/course")
public class ApiCourseController {

    @Autowired
    private CourseService courseService;

    @Autowired
    private ChapterService chapterService;

    @ApiOperation("课程列表")
    @GetMapping("list")
    public R list(
            @ApiParam(value = "查询对象", required = false)
                    WebCourseQueryVo webCourseQueryVo) {
        List<Course> courseList = courseService.webSelectList(webCourseQueryVo);
        return R.ok().data("courseList", courseList);
    }

    @ApiOperation("根据ID查询课程")
    @GetMapping("get/{courseId}")
    public R getById(
            @ApiParam(value = "课程ID", required = true)
            @PathVariable String courseId) {

        // 查询课程信息和讲师信息
        WebCourseVo webCourseVo = courseService.selectWebCourseVoById(courseId);

        // 查询当前课程的章节信息
        List<ChapterVo> chapterVoList = chapterService.nestedList(courseId);

        return R
                .ok()
                .data("course", webCourseVo)
                .data("chapterVoList", chapterVoList);
    }

    @ApiOperation("根据课程 id 查询课程信息")
    @GetMapping("inner/get-course-dto/{courseId}")
    public CourseDto getCourseDtoById(
            @ApiParam(value = "课程 ID", required = true)
            @PathVariable String courseId) {
        CourseDto courseDto = courseService.getCourseDtoById(courseId);
        return courseDto;
    }

    @ApiOperation("根据课程 id 更改销售量")
    @GetMapping("inner/update-buy-count/{id}")
    public R updateBuyCountById(
            @ApiParam(value = "课程id", required = true)
            @PathVariable String id){
        courseService.updateBuyCountById(id);
        return R.ok();
    }
}
